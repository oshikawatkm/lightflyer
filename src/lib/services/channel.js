const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/Channel');
const Channel = mongoose.model('channels');
require ('../models/Workspace');
const Workspace = mongoose.model('workspaces');
require ('../models/LNnode');
const LNnode = mongoose.model('lnnodes');
const randomGenerator = require("../utils/randamGenerator");

const ChannelServices = (() => {
  return {
    create:async  (oid, channel_point, chan_id, options) => {
      new Channel({
        lnnode: oid,
        active: true,
        remote_pubkey: options.node_pubkey_string,
        channel_point: channel_point + ":0",
        chan_id: chan_id,
        capacity: parseInt(options.push_sat, 10),
        local_balance: parseInt(options.push_sat, 10),
        remote_balance: parseInt(options.remote_balance, 10),
        commit_fee: 9050,
        commit_weight: 600,
        fee_per_kw: 12500,
        unsettled_balance: 0,
        total_satoshis_sent: 0,
        total_satoshis_received: 0,
        num_updates: 0,
        pending_htlcs: [],
        csv_delay: 144,
        private: options.private? options.private : false
      })
      .save()
    },
    find: async (oid) => {
      let channels = await Channel
        .find({lnnode: oid})
        .then(channel => {
          return channel;
        });
      return channels;
    },
    findOne: async (oid) => {
      let channel = await Channel
        .findOne({
          _id: ObjectId(oid),
          active: true
        })
        .then(channel => {

          return channel;
        })
      return channel;
    },
    destroy: () => {
      
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
    findCount: async(oid) => {
      let channelCount = await Channel.find({
        lnnode: mongoose.Types.ObjectId(oid)
      }).then(res => {
        return res.length;
      })
      return channelCount;
    },
    close:async (wsId, oid, funding_txid_str, output_index) => {
      try {
        let ws = await Workspace.findById(wsId)
      .then((res, err) => {
        return res
      })
        let senderChannel = await Channel
          .findOneAndUpdate(
            { 
              lnnode: oid, 
              channel_point: funding_txid_str +":"+output_index, 
              active: true
            },
            {
              active: false,
            }
          ).then((res, err) => {
            if(err) logger.error(err);
            return res;
          })
          let receiverChannel = await Channel
          .findOneAndUpdate(
            {
              lnnode: {$ne: oid}, 
              channel_point: funding_txid_str +":"+output_index, 
              avtive: true
            },
            {
              active: false,
            }
          ).then((res, err) => {
            if(err) logger.error(err)
            return res;
          })

          await LNnode
            .findByIdAndUpdate(
              senderChannel.lnnode,
              {
                $inc: {balance:  senderChannel.local_balance - ws.blockchain_config.fee}
              }
            ).then((res, err) => {
              if(err) logger.error(err)
              return res;
            })
          
            
          await LNnode
            .findByIdAndUpdate(
              receiverChannel.lnnode,
              {
                $inc: {balance:  receiverChannel.local_balance - ws.blockchain_config.fee}
              }
            ).then((res, err) => {
              if(err) logger.error(err)
              return res;
            })

          return {
            txid: funding_txid_str,
            output_index: output_index
          }
      } catch(err) {
        return new Error("Hoge")
      }
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
    hasChannel:async (oId, ipubkey) => {
      await Channel.findOne({ 
        lnnode: oId, 
        pub_key: ipubkey
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
