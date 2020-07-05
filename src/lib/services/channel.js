const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/Channel');
const Channel = mongoose.model('channels');
require ('../models/Workspace');
const Workspace = mongoose.model('workspaces');


const ChannelServices = (() => {
  return {
    create: (oid, chan_id, options) => {
      new Channel({
        lnnode: oid,
        active: true,
        remote_pubkey: options.node_pubkey,
        channel_point: "hoge",
        chan_id: chan_id,
        capacity: parseInt(options.push_sat, 10),
        local_balance: parseInt(options.push_sat, 10),
        remote_balance: parseInt(options.local_funding_amount, 10),
        commit_fee: 9050,
        commit_weight: 600,
        fee_per_kw: 12500,
        unsettled_balance: 0,
        total_satoshis_sent: 0,
        total_satoshis_received: 0,
        num_updates: 0,
        pending_htlcs: [],
        csv_delay: 144,
        private: options.private
      })
      .save()
      .then((node) => {
        // 開設時のlocal_amt分nodeからbalanceをマイナス
        logger.info(node)
      })
      return;
    },
    find: async (oid) => {
      let channels = await Channel
        .find({"_id": ObjectId(oid)})
        .then(channel => {

          
          return channel;
        });
      return channels;
    },
    findOne: async (oid) => {
      let channel = await Channel
        .findOne({
          "_id": ObjectId(oid),
          active: true
        })
        .then(channel => {

          return channel;
        })
      return channel;
    },
    destroy: () => {
      
    },
    close:async (oid) => {
      try {
        await Channel
          .findOneAndUpdate({
            "_id": ObjectId(oid),
            balance: lnnode.balance - invoice.value,
          })
      } catch(err) {
        return new Error("Hoge")
      }
    },
    findChannelId: async(oid, ipubkey) => {
      let channel = await Channel.findOne({
        lnnode: oid, 
        pub_key: ipubkey,
        active: true
      })
        .then(res => {
          return res;
        })
      return channel._id;
    },
    isChannel:async (senderOId, receiverOId, receiverPubkey, senderPubkey) => {
      await Channel.findOne({ 
        lnnode: senderOId, 
        pub_key: receiverPubkey
      })
        .then(node => {
          if (!node || node.active === false) {
            return false;
          }
        })
      
      await Channel.findOne({ 
          lnnode: receiverOId,
          pub_key: senderPubkey
        })
        .then(node => {
          if (!node || node.active === false) {
            return false;
          }
        })
      
      return true;
    },
  }
})()

module.exports = ChannelServices;
