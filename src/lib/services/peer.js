const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/Peer');
const Peer = mongoose.model('peers');

const PeerServices = (() => {

  return {
    create: (oid, ipubkey, options) => {
      new Peer({
        lnnode:  oid,
        pub_key: ipubkey,
        address: options.addr.host,
      })
      .save()
      .then(() => logger.info("Success Saving Sender Peer!"))
      .catch(err => logger.error(err))
    },
    find: async (oid) => {
      let peers = await Peer.find({ lnnode: oid })
        .then(res => {
          return res
        });

      return peers;
    },
    findOne: async (workspaceName) => {
      
    },
    findCount: async(oid) => {
      let peerCount = await Peer.find({
        lnnode: mongoose.Types.ObjectId(oid)
      }).then(res => {
        return res.length;
      })
      return peerCount;
    },
    isPeer:async (senderOId, receiverOId, receiverPubkey, senderPubkey) => {
      await Peer.findOne({ 
        lnnode: senderOId, 
        pub_key: receiverPubkey
      })
        .then(node => {
          if (!node) {
            return false;
          }
        })
      
      await Peer.findOne({ 
          lnnode: receiverOId,
          pub_key: senderPubkey
        })
        .then(node => {
          if (!node) {
            return false;
          }
        })
      
      return true;
    }
  }
})()

module.exports = PeerServices;
