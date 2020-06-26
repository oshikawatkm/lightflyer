const logger = require('../utils/logger');
const RpcServer = require("../objects/RpcServer");
const HttpServer = require("../objects/HttpServer");

const ServerManager = (() => {
  let httpServer;

  return {
    init: (info) => {
      rpcServer = new RpcServer(info.rpc_listen_port)
      httpServer = new HttpServer(info.rest_listen_port)
    },
    start: () => {
      logger.info("Starting Servers...")
      
      httpServer.listen()
        .catch(err => logger.error(err));
    },
    stop:() => {
      rpcServer.stop()
        .catch(err => logger.error(err));
        
      httpserver.stop()
        .catch(err => logger.error(err));
    }
  }
})()

module.exports = ServerManager;