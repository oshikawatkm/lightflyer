const NodeManager = require('./src/lib/NodeManager');
const ServerManager = require('./src/lib/ServerManager');
const logger = require('./src/utils/logger');
const fs = require('fs');



const App = (function(nodeManager, serverManager){
  const default_nodes_json_path = './cfg/default_nodes.json';
  const setting_json_path = './cfg/setting.json'
  const lnNodes = [];
  let defaultNodesJson;
  let settingJson;

  return {
    init: function() {
      logger.info("Initialze App...")

      

      // Create Node by json
      defaultNodesJson = JSON.parse(fs.readFileSync(default_nodes_json_path));
      defaultNodesJson.forEach(obj => {
        lnNodes.push(nodeManager.factory(obj))
      })

      // Setup Own Node
      settingJson = JSON.parse(fs.readFileSync(setting_json_path));
      const OwnNode = nodeManager.initOwnNode(settingJson);

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
})(NodeManager, ServerManager)


App.init();