const logger = require("../utils/logger")
const fs = require("fs");
var grpc = require("grpc");



class GrpcServer {
  constructor(listen_port) {
    this.listen_port = listen_port;
  }

  async listen() {
    let credentials = grpc.ServerCredentials.createSsl(
      fs.readFileSync("../certs/ca.crt"),
      [
        {
          cert_chain: fs.readFileSync("../certs/server.crt"),
          private_key: fs.readFileSync("../certs/server.key")
        }
      ],
      true
    );
  
    let unsafeCreds = grpc.ServerCredentials.createInsecure();
  
    var server = new grpc.Server();

    server.bind(`127.0.0.1:${this.listen_port}`, unsafeCreds);
    server.start();
    logger.info(`gRPC Server running on port 127.0.0.1:${this.listen_port}`);
  }

  _router(handle, pathname, req, res) {
 
  }

  _setHandler() {
    
  }
}

module.exports = GrpcServer;