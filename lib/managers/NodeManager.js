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

module.exports = NodeManager;