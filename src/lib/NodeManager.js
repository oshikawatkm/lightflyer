const LnNode = require ('../objects/LnNode');
const OwnLnNode = require('../objects/OwnLnNode');


const NodeManager = (function() {

  return {
    factory: function(info) {
      return new LnNode(
        info.name,
        info.balance,
        info.iditity_pubkey
      );
    },
    initOwnNode:function(cfg) {
      return new OwnLnNode(
        cfg.rpc_listen_port,
        cfg.rest_listen_port,
        cfg.balance,
        cfg.iditity_pubkey,
        cfg.address
      );
    }
  }
})()

module.exports = NodeManager;