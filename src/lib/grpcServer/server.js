const logger = require("../utils/logger")
const fs = require("fs");
const grpc = require("grpc");

const lnrpc = require("./protos/lnrpc_grpc_pb");


class GrpcServer {
  constructor(listen_port) {
    this.listen_port = listen_port;
  }

  async listen() {
    let credentials = grpc.ServerCredentials.createSsl(
      fs.readFileSync(__dirname + "/../../../certs/ca.crt"),
      [
        {
          cert_chain: fs.readFileSync(__dirname + "/../../../certs/server.crt"),
          private_key: fs.readFileSync(__dirname + "/../../../certs/server.key")
        }
      ],
      true
    );
  
    let unsafeCreds = grpc.ServerCredentials.createInsecure();
  
    var server = new grpc.Server();
    this._router()
    server.bind(`127.0.0.1:${this.listen_port}`, unsafeCreds);
    server.start();
    logger.info(`gRPC Server running on port 127.0.0.1:${this.listen_port}`);
  }

  _router() {
    server.addService(lnrpc.lnrpcServiceService, {
      getChannels: getChannels,
    })

  }

  _setHandler() {
    
  }
}

module.exports = GrpcServer;