const BlockchainManager = require('./controllers/BlockchainManager');
const LNnodeCtr = require('./controllers/lnnode');
const WorkspaceCtr = require('./controllers/workspace');
const ServerCtr = require('./controllers/server');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
const db = require('../../cfg/db')
const Workspace = require('./models/Workspace');
const RestServer = require('./restServer/server.js');
const GrpcServer = require('./grpcServer/server.js');

const App = (() => {
  let thisWorkspace;
  let config;
  

  return {
    init: (config) => {
      logger.info("Initialze App...")

      // connect MongoDB
      mongoose.Promise = global.Promise;
      mongoose.connect(db.mongoURI)
        .then(() => logger.info('MongoDB Connected...'))
        .catch(err => logger.error(err))

      let nodesArr = LNnodeCtr.factory(config);
      WorkspaceCtr.init(config, nodesArr);
    },
    start: async (workspaceName) => {
      logger.info("Start App...")

      // connect MongoDB [TASK]: Remove this!
      mongoose.Promise = global.Promise;
      mongoose.connect(db.mongoURI)
        .then(() => logger.info('MongoDB Connected...'))
        .catch(err => logger.error(err))
      
      // Set Workspace
      thisWorkspace = workspaceName;

      // Read config
      let workspaceConfig = await WorkspaceCtr.get(thisWorkspace)

      // // Start REST Server
      let restServer = new RestServer(workspaceConfig.server_config.rest_listen_port)
      restServer.listen()

      // // Start gRPC Server
      // let grpcServer = new GrpcServer(workspaceConfig.server_config.rpc_listen_port)
      // grpcServer.listen()

    },
    stop: () => {
      WorkspaceCtr.save();
    },
    saveWarkSpace: function() {

    }
  }
})()

module.exports = App;
App.start()