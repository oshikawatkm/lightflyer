const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/Invoice');
const Invoice = mongoose.model('invoices');
require ('../models/Workspace');
const Channel = mongoose.model('channels');
const randomGenerator = require("../utils/randamGenerator");


const ChannelServices = (() => {



  return {
    create: (oid, options) => {
      new Invoice({
        lnnode: oid,
        memo: options.memo ? options.memo : "",
        r_preimage: options.r_preimage ? options.r_preimage : randomGenerator(64),
        r_hash: options.r_hash ? options.r_hash: randomGenerator(64),
        value: parseInpt(options.value, 10),
        value_msat: parseInpt(options.value_msat, 10),
        settled: false,
        creation_date: new Date().getTime().toString(),
        settle_date: "0",
        r_hash: "ln"+ randomGenerator(249),
        description_hash: null,
        expiry: 3600,
        fallback_addr: "",
        cltv_expiry: 40,
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
    payment:async (oid, options) => {
      try {
        let invoice = await Invoice
          .findOne({ lnnode: oid, payment_request: options.payment_request },)
          .then(invoice => {
            return invoice;
          })

        let lnnode = await LNnode.findOne({"_id": ObjectId(oid)})
        .then(lnnode => {
          return lnnode;
        })

        await Invoice
          .findOneAndUpdate(
            { lnnode: oid },
            {
              amt_paid: invoice.value,
              amt_paid_sat: invoice.value_msat,
              amt_paid_msat:invoice.value,
              settled: true,
              settle_date: new Date().getTime().toString(),
              state: "SETTLED"
            }
            )
          .then(invoice, err => {
            if (err) return new Error(err);
            return invoice;
          })
        
        await Channel
          .findOneAndUpdate(
            { "_id": ObjectId(oid)},
            { balance: lnnode.balance - invoice.value }
          )
        } catch(err) {
          return new Error("Hoge")
        }
      return;
    },
  }
})()

module.exports = ChannelServices;
