const grpc = require("grpc");
const logger = require("../utils/logger")

class RpcServer {
  constructor(listen_port) {
    this.listen_port = listen_port;
    this.server = new grpc.Server();
  }

  async listen() {
    let unsafeCreds = grpc.ServerCredentials.createInsecure();

    this.server.bind(`127.0.0.1:${this.listen_port}`, unsafeCreds);
    this.server.start();

    logger.info(`RpcServer running on port 127.0.0.1:${this.listen_port}`);
  }

  async stop() {

    this.server.stop();
    logger.info(`Srop RpcServer`);
  }
}

module.exports = RpcServer;