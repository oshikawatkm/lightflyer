const LnNode = require ('../models/LNnode');
const OwnLnNode = require('../objects/OwnLnNode');

const LNnodeController = (() => {
  let defaultNodeNames = ["You", "Alice", "Bob", "Charlie", "Dave"]
  let nodes = []
  return {
    factory: (config) => {
      for (i = 0; i <= config.nodeNumber - 1 ;i++) {
        let node = new LnNode(
          defaultNodeNames[i],
          config.satoshi,
          config.publicKey,
          config.privateKey,
          config.iditity_pubkey,
          config.address,
          config.peers,
          config.channels
        );
        
        nodes.push(node)
      }
      return nodes;
    },
    initOwnNode:(info) => {
      ownNode = new OwnLnNode(
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
    addPeer:(senderAddr, reciverAdder) => {
      let senderNodeIndex = nodes.findIndex((node) => {
         return node.address === senderAddr
      })
      let reciverNodeIndex = nodes.findIndex((node) => { 
        return node.address === reciverAdder
      })
      nodes[senderNodeIndex].addPeer(reciverAdder)
      nodes[reciverNodeIndex].addPeer(senderAddr)
    },
    addChannel:(senderAddr, reciverAdder) => {
      let senderNodeIndex = nodes.findIndex((node) => {
         return node.address === senderAddr
      })
      let reciverNodeIndex = nodes.findIndex((node) => { 
        return node.address === reciverAdder
      })
      nodes[senderNodeIndex].addChannel(reciverAdder)
      nodes[reciverNodeIndex].addChannel(senderAddr)
    },
    addInvoice:(invoice, reciverAdder) => {
      let reciverNodeIndex = nodes.findIndex((node) => { 
        return node.address === reciverAdder
      })
      nodes[reciverNodeIndex].addInvoice(invoice)
    }
  }
})()

module.exports = LNnodeController;