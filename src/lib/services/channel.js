const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/Channel');
const Channel = mongoose.model('channels');
require ('../models/Workspace');
const Workspace = mongoose.model('workspaces');


const ChannelServices = (() => {
  return {
    create: (pubkey,  chan_id, options) => {
      new Channel({
        active: true,
        remote_pubkey: pubkey,
        channel_point: "hoge",
        chan_id: chan_id,
        capacity: options.push_sat,
        local_balance: options.push_sat,
        remote_balance: options.local_funding_amount,
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
      .then(() => {
        // 開設時のlocal_amt分nodeからbalanceをマイナス

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
        .findOne({"_id": ObjectId(oid)})
        .then(channel => {

          return channel;
        })
      return channel;
    },
    destroy: () => {
      
    }
  }
})()

module.exports = ChannelServices;
