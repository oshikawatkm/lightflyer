const LNnodeServices  = require('../services/lnnode');
const PeerServices    = require('../services/peer');
const ChannelServices = require('../services/channel');
const InvoiceServices = require('../services/invoice');

const LNnodeController = (() => {
  let selfIPubkey;
  let selfAddr;

  return {
    factory: async (config) => {
      let nodes = [];
      for (i = 0; i <= config.nodeNumber - 1 ;i++) {
        let node = await LNnodeServices.create();
        nodes.push(node);
      }
      return nodes;
    },
    addPeerToSelf:(senderAddr, options) => {
      PeerServices.create(senderAddr, selfAddr, options);
    },
    addPeerFromSelf: (receiverAddr, options) => {
      PeerServices.create(selfAddr, receiverAddr, options);
    },
    addPeersByOthers: (senderAddr, receiverAddr, options) => {
      PeerServices.create(senderAddr, receiverAddr, options);
    },
    addChannelToSelf:async (senderIPubkey,options) => {
      if(await !PeerServices.isPeer()) {
        return
      }
      ChannelServices.create(senderIPubkey, selfIPubkey, options);
    },
    addChannelFromSelf:async (receiverIPubkey, options) => {
      if(await !PeerServices.isPeer()) {
        return
      }
      ChannelServices.create(selfIPubkey, receiverIPubkey, options);
    },
    addInvoiceByOthers:async (senderIPubkey, receiverIPubkey) => {
      if(await !ChannelServices.isChannel()) {
        return
      }
      ChannelServices.create(senderIPubkey, receiverIPubkey, options);
    },
    addInvoice:() => {
      InvoiceServices.create()
    },
    payment:(estabrisherIPubukey, participantIPubukey) => {
      
    },
    addChannelByOthers: (senderPubkey, receiverPubkey) => {

    },
    paymentByOthers:(senderPubkey, receiverPubkey) => {

    },
  }
})()

module.exports = LNnodeController;