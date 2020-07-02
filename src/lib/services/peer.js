const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/Peer');
const Peer = mongoose.model('peers');
const db = require('../../../cfg/db');

const PeerService = (() => {
  return {
    create: (senderPubkey, senderAddr, receiverPubkey, receiverAddr, options) => {

      // Add Peer to Sender
      new Peer({
        pub_key: senderPubkey,
        address: receiverAddr,
      })
      .save()
      .then(() => logger.info("Success Saving Sender Peer!"))
      .catch(err => logger.error(err))

      // Add Peer to Receiver
      new Peer({
        pub_key: receiverPubkey,
        address: senderAddr,
      })
      .save()
      .then(() => logger.info("Success Saving Receiver Peer!"))
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
    isPeer:() => {
      
    }
  }
})()

module.exports = PeerService;
