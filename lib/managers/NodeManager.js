const LnNode = require ('../objects/LnNode');
const OwnLnNode = require('../objects/OwnLnNode');

const NodeManager = (() => {
  let nodes = []
  return {
    factory: (info,config,network) => {
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
      
      nodes.push(node)
      return node;
    },
    initOwnNode:function(info) {
      ownNode = new OwnLnNode(
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
      nodes.push(ownNode)
      return ownNode;
    },
    addPeer(senderAddr, reciverAdder) {
      senderAddr = "iainovni2r0dskndegr";
      reciverAdder = "29da483irutejkddav"
      let senderNodeIndex = nodes.findIndex((node) => {
         return node.address === senderAddr
      })
      let reciverNodeIndex = nodes.findIndex((node) => { 
        return node.address === reciverAdder
      })
      nodes[senderNodeIndex].addPeer(reciverAdder)
      nodes[reciverNodeIndex].addPeer(senderAddr)
      console.log(nodes[senderNodeIndex])
      console.log(nodes[reciverNodeIndex])
    },
    addChannel(senderAddr, reciverAdder) {
      senderAddr = "iainovni2r0dskndegr";
      reciverAdder = "29da483irutejkddav"
      let senderNodeIndex = nodes.findIndex((node) => {
         return node.address === senderAddr
      })
      let reciverNodeIndex = nodes.findIndex((node) => { 
        return node.address === reciverAdder
      })
      nodes[senderNodeIndex].addChannel(reciverAdder)
      nodes[reciverNodeIndex].addChannel(senderAddr)
    },
    addInvoice(invoice, reciverAdder) {
      let reciverNodeIndex = nodes.findIndex((node) => { 
        return node.address === reciverAdder
      })
      nodes[reciverNodeIndex].addInvoice(invoice)
    }
  }
})()

module.exports = NodeManager;