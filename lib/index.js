const BlockchainManager = require('./controllers/BlockchainManager');
const LNnodeCtr = require('./controllers/lnnode');
const WorkspaceCtr = require('./controllers/workspace');
const ServerCtr = require('./controllers/server');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
const db = require('../cfg/db')
const Workspace = require('./models/Workspace');


const App = ((blockchainManager, LNnodeCtr, ServerCtr, WorkspaceCtr) => {
  const config_json_path = '../cfg/config.json'
  const lnNodes = [];
  let worksapce;
  let config;
  

  return {
    init: (config) => {
      logger.info("Initialze App...")

      mongoose.Promise = global.Promise;
      mongoose.connect(db.mongoURI)
        .then(() => logger.info('MongoDB Connected...'))
        .catch(err => logger.error(err))

      let nodesArr = LNnodeCtr.factory(config);
      WorkspaceCtr.init(config, nodesArr);
    },
    start: async (workspaceName) => {
      logger.info("Start App...")

      mongoose.Promise = global.Promise;
      mongoose.connect(db.mongoURI)
        .then(() => logger.info('MongoDB Connected...'))
        .catch(err => logger.error(err))

      // set wprkspace
      workspace = workspaceName;
      await ServerCtr.init(workspace)
      console.log("ok")
      ServerCtr.listen()

  
      // // Initialize Blockchain
      // blockchainManager.init(config["blockchain_config"])

      // // Create Node by json
      // config["nodes_config"].forEach(obj => {
      //   lnNodes.push(
      //     nodeManager.factory(obj)
      //      //.then(node => blockchainManager.registerNode(node))
      //   )
      // })

      // // Setup Own Node
      // const OwnNode = nodeManager.initOwnNode(config["own_node_config"]);

      // logger.info("Create Own Node");
      // //logger.info(OwnNode);

      // 
      // serverManager.init(config["own_node_config"])
      // serverManager.start()
    },
    stop: () => {

    },
    saveWarkSpace: function() {

    }
  }
})(BlockchainManager, LNnodeCtr, ServerCtr, WorkspaceCtr)

module.exports = App;