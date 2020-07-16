const logger = require("../utils/logger")
const fs = require("fs");
const grpc = require("grpc");

const lnrpc = require("./protos/rpc_grpc_pb");
const {listChannels, openChannel, closeChannel}  = require("./route/channel")
const {sendPaymentSync}  = require("./route/lnnode")
const {addInvoice, listInvoices}  = require("./route/invoice")
const {connectPeer, listPeers}  = require("./route/peer")

class GrpcServer {
  constructor(listen_port) {
    this.listen_port = listen_port;
    this.server = new grpc.Server();
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
  
    this._router()
    this.server.bind(`127.0.0.1:${this.listen_port}`, unsafeCreds);
    this.server.start();
    logger.info(`gRPC Server running on port 127.0.0.1:${this.listen_port}`);
  }

  _router() {

    this.server.addService(lnrpc.LightningService, {
      listChannels: listChannels,
      openChannel: openChannel,
      connectPeer: connectPeer,
      listPeers: listPeers,
      addInvoice: addInvoice,
      listInvoices: listInvoices,
      sendPaymentSync: sendPaymentSync,
      closeChannel: closeChannel
    })

  }

  _setHandler() {
    
  }
}

module.exports = GrpcServer;