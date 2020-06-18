const LnNode = require ('../objects/LnNode');
const OwnLnNode = require('../objects/OwnLnNode');


const NodeManager = (function() {

  return {
    factory: function(info,config,network) {
      let node = new LnNode(
        info.name,
        info.balance,
        info.publicKey,
        info.privateKey,
        info.iditity_pubkey,
        info.address,
        info.peers,
        info.channels
      );
      if (!info.use_default) {
        node.init(network)
      }
      return node;
    },
    initOwnNode:function(info) {
      return new OwnLnNode(
        info.rpc_listen_port,
        info.rest_listen_port,
        info.name,
        info.balance,
        info.publicKey,
        info.privateKey,
        info.iditity_pubkey,
        info.address,
        info.peers,
        info.channels
      );
    }
  }
})()

module.exports = NodeManager;