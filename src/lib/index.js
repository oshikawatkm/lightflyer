const BlockchainCtr = require('./controllers/blockchain');
const LNnodeCtr = require('./controllers/lnnode');
const WorkspaceCtr = require('./controllers/workspace');
const PeerCtr = require('./controllers/peer');
const ChannelCtr = require('./controllers/channel');
const InvoiceCtr = require('./controllers/invoice');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
const db = require('../../cfg/db')
const Workspace = require('./models/Workspace');
const RestServer = require('./restServer/server.js');
const GrpcServer = require('./grpcServer/server.js');
const ReqHistoryCtr = require('./controllers/reqhistory');

const App = (() => {
  let thisWSname;
  let wsId;

  return {
    init:async () => {
      logger.info("Initialzing App...")
      try{
        // connect MongoDB
        mongoose.Promise = global.Promise;
        await mongoose.connect(db.mongoURI, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false})
          .then(() => logger.info('MongoDB Connected...'))
          .catch(err => logger.error(err))
      }catch(err){
        logger.error("Failed Initialzing App!!")
      }
    },
    start: async (workspaceName) => {
      try{
        logger.info("Start App...")

        // Set Workspace
        thisWSname = workspaceName;
        wsId = await WorkspaceCtr.init(thisWSname)
        await LNnodeCtr.init(wsId)
        await PeerCtr.init(wsId)
        await ChannelCtr.init(wsId)
        await ReqHistoryCtr.init(wsId)
        await InvoiceCtr.init(wsId)

        // Read config
        let workspaceConfig = await WorkspaceCtr.get(thisWSname)

        // Start HTTP Server
        let restServer = new RestServer(workspaceConfig.server_config.rest_listen_port)
        restServer.listen()

        // Start gRPC Server
        let grpcServer = new GrpcServer(workspaceConfig.server_config.rpc_listen_port)
        grpcServer.listen()

        
      }catch(err){
        logger.error(err)
        logger.error("Failed Starting App!!")
      }
    },
    stop: () => {
      WorkspaceCtr.save();
    },
    saveWarkSpace: function() {

    }
  }
})()

module.exports = App;
// App.init()
// App.start("test2")