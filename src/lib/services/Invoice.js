const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/Invoice');
const Invoice = mongoose.model('invoices');
require ('../models/Workspace');
const Channel = mongoose.model('channels');
const randomGenerator = require("../utils/randamGenerator");


const ChannelServices = (() => {



  return {
    create:async (oid, options) => {
      console.log(oid)
      new Invoice({
        lnnode: oid,
        memo: options.memo ? options.memo : "",
        r_preimage: options.r_preimage ?options.r_preimage : randomGenerator(64),
        r_hash: options.r_hash ? options.r_hash : randomGenerator(64),
        value: parseInt(options.value, 10),
        value_msat: parseInt(options.value, 10) * 100,
        settled: false,
        creation_date: new Date().getTime().toString(),
        settle_date: "0",
        payment_request: "ln" + randomGenerator(249),
        r_hash: randomGenerator(64),
        description_hash: options.description_hash ? options.description_hash : null,
        expiry: options.expiry ? options.expiry : 3600,
        fallback_addr: options.fallback_addr ? options.fallback_addr : "",
        cltv_expiry: options.cltv_expiry ? options.cltv_expiry : 40,
        route_hints: true,
        private: false,
        add_index: 1,
        settle_index: 1,
        amt_paid: 0,
        amt_paid_sat: 0,
        amt_paid_msat: 0,
        state: "OPEN",
        htlcs: [],
        features: [],
        is_keysend: false
      })
      .save()
      .then((invoice) => {
        logger.info(invoice)
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
  }
})()

module.exports = ChannelServices;
