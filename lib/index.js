const BlockchainManager = require('./managers/BlockchainManager');
const NodeManager = require('./managers/NodeManager');
const ServerManager = require('./managers/ServerManager');
const logger = require('./utils/logger');
const fs = require('fs');



const App = (function(blockchainManager,nodeManager, serverManager){
  const config_json_path = '../cfg/config.json'
  const lnNodes = [];
  let config;

  return {
    init: function() {
      logger.info("Initialze App...")

      // Read config
      config = JSON.parse(fs.readFileSync(config_json_path));
      console.log(config)
      console.log(config["blockchain_config"])
  
      // Initialize Blockchain
      blockchainManager.init(config["blockchain_config"])

      // Create Node by json
      config["nodes_config"].forEach(obj => {
        lnNodes.push(
          nodeManager.factory(obj)
           //.then(node => blockchainManager.registerNode(node))
        )
      })

      // Setup Own Node
      const OwnNode = nodeManager.initOwnNode(config["own_node_config"]);

      logger.info("Create Own Node");
      //ogger.info(OwnNode);

      // 
      serverManager.start(OwnNode)

    },
    stop: function() {

    },
    saveWarkSpace: function() {

    }
  }
})(BlockchainManager, NodeManager, ServerManager)


App.init();