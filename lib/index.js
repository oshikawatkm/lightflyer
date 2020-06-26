const BlockchainManager = require('./managers/BlockchainManager');
const NodeManager = require('./managers/NodeManager');
const ServerManager = require('./managers/ServerManager');
const logger = require('./utils/logger');
const fs = require('fs');
const path = require('path');


const App = ((blockchainManager, nodeManager, serverManager) => {
  const config_json_path = '../cfg/config.json'
  const lnNodes = [];
  let config;
  

  return {
    init: (config) => {
      logger.info("Initialze App...")
      if (config) {
        fs.mkdir(config.configFileDir, (err) => {
          if (err) {
            logger.error(err)
          }
          logger.info(config.configFileDir + "has Created!")

        })
        fs.writeFileSync(path.join(config.configFileDir,config.workspaceName + ".json"), JSON.stringify(config))
      }
    },
    start: () => {
      logger.info("Start App...")
      // Read config
      config = JSON.parse(fs.readFileSync(config_json_path));
  
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
      //logger.info(OwnNode);

      // 
      serverManager.init(config["own_node_config"])
      serverManager.start()
    },
    stop: () => {

    },
    saveWarkSpace: function() {

    }
  }
})(BlockchainManager, NodeManager, ServerManager)

module.exports = App;