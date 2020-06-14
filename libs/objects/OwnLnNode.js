const LnNode = require("./LnNode");
const RpcServer = require("./RpcServer");
const HttpServer = require("./HttpServer");
const logger = require('../utils/logger');

class OwnLnNode extends LnNode {
  constructor(
      rpc_listen_port,
      rest_listen_port,
      balance, 
      publicKey, 
      privateKey, 
      iditity_pubkey, 
      address
    ) {
    super(balance, publicKey, privateKey, iditity_pubkey, address, peers, channels)
    this.rpc_listen_port = rpc_listen_port;
    this.rest_listen_port = rest_listen_port;
    this.rpcServer = new RpcServer(rpc_listen_port);
    this.httpServer = new HttpServer(rest_listen_port);
  }

  async listen() {
    
  }

  addPeers() {
    super.addPeer()
  }

  addChannel () {
    super.addChannel()
  }

}

module.exports = OwnLnNode;