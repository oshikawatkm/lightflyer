const LnNode = require("./LnNode");
const RpcServer = require("./RpcServer");
const HttpServer = require("./HttpServer");
const logger = require('../utils/logger');

class OwnLnNode extends LnNode {
  constructor(rpc_listen_port, rest_listen_port, balance, iditity_pubkey, address) {
    super(balance, iditity_pubkey, address)
    this.rpc_listen_port = rpc_listen_port;
    this.rest_listen_port = rest_listen_port;
    this.rpcServer = new RpcServer(rpc_listen_port);
    this.httpServer = new HttpServer(rest_listen_port);
  }

  async listen() {
    
  }


}

module.exports = OwnLnNode;