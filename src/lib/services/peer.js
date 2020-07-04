const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/Peer');
const Peer = mongoose.model('peers');

const PeerServices = (() => {
  function _extractAddress(str) {
    let index   = str.indexOf("@");
    let address = str.slice(index + 1);
    return address;
  }

  return {
    create: (oid, ipubkey, options) => {
      let address = _extractAddress(options.addr);
      new Peer({
        lnnode:  oid,
        pub_key: ipubkey,
        address: address,
      })
      .save()
      .then(() => logger.info("Success Saving Sender Peer!"))
      .catch(err => logger.error(err))
    },
    find: async () => {

      let workspaces = await Workspace.find()
        .then(res => {
          return res
        });

      return workspaces;
    },
    findOne: async (workspaceName) => {
      
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
