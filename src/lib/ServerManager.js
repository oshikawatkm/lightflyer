const logger = require('../utils/logger');

const ServerManager = (function() {

  return {
    start: (node) => {
      logger.info("Starting Servers...")
      // Start rpc server & http server
      node.rpcServer.listen()
        .catch(err => console.log(err));

      node.httpServer.listen()
      .catch(err => console.log(err));

    },
    stop: (node) => {
      node.rpcServer.stop()
        .catch(err => console.log(err));
        
      node.httpserver.stop()
        .catch(err => console.log(err));
    }
  }
})()

module.exports = ServerManager;