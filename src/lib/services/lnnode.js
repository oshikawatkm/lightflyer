const logger = require('../utils/logger');
const bitcoinjs = require('bitcoinjs-lib');
const mongoose = require('mongoose');
const { lchownSync } = require('fs');
require ('../models/Workspace');
const Workspace = mongoose.model('workspaces');
const LNnode = mongoose.model('lnnodes');
const Invoice = mongoose.model('invoices');
const Channel = mongoose.model('channels');

const LNnodeServices = (() => {
  let defaultNodeNames = ["You", "Alice", "Bob", "Charlie", "Dave"]
  let YourIPubkey;

  // Validation of add Invoice
  function _isChannel (establisherPubkey, participantPubkey) {
    Channel.findOne({ remote_pubkey: establisherPubkey})
      .then(res => {if (!res) { return false}})

    Channel.findOne({ remote_pubkey: participantPubkey})
      .then(res => {if (!res) { return false}})

    return true;
  };

  async function _isSufficent(balance, value) {
    if (balance < value) {
      return false;
    } else {
      return true;
    }
  }

  return {
    create: async (oid, config, count) => {
      let keyPair = bitcoinjs.ECPair.makeRandom();
      let privateKey = keyPair.toWIF();
      let publicKey = keyPair.publicKey.toString('hex');
      new LNnode({
        workspace: oid,
        name: defaultNodeNames[i],
        balanace: config.satoshi,
        publicKey: publicKey,
        privateKey: privateKey,
        iditity_pubkey: publicKey,
        address: "192.168.0." + (1 + count).toString(),
      })
        .save()
        .catch(err => logger.error(err))
    },
    find:async (oid) => {
      let lns = await LNnode.find({workspace: mongoose.Types.ObjectId(oid)})
        .then(res => {return res})
      return lns;
    },
    findOne: async (oid, name) => {
      let ln = await LNnode.findOne({workspace: oid, name: name})
        .then(res => {return res})
      return ln;
    },
    findOneByPubkey: async (pubkey) => {
      let ln = await LNnode.findOne({publicKey: pubkey})
        .then(res => {
          return res
        })
      return ln;
    },
    funding:async (wsId, oid, push_sat) => {
      // 開設時のlocal_amt分nodeからbalanceをマイナス
      let ws = await Workspace.findById(wsId)
      .then((res, err) => {
        return res
      })
      let amount = ws.blockchain_config.fee + push_sat;
      console.log(amount, ws.blockchain_config.fee, push_sat)
      await LNnode.findByIdAndUpdate(
        oid,
        {  $inc: { balance: -amount } }
      )
      .then((res, err) => {
        if (err) logger.error(err);
        logger.info(res);
      })

      return;
    },
    payment:async (ipubkey, options) => {
      try{
        let invoice = await Invoice
          .findOne({payment_request: options.payment_request },)
          .then((res,err) => {
            return res
          })

        let lnnode = await LNnode.findOne({publicKey: ipubkey})
        .then(res => {
          return res;
        })

        let channel = await Channel.findOne({lnnode: lnnode._id})

        // if (!await _isSufficent(channel.capacity - channel.local_balance - channel.remote_balance, invoice.value)){
        //   console.log(channel.capacity - channel.local_balance - channel.remote_balance)
        //   return;
        // }
        await Invoice
          .findOneAndUpdate(
            { payment_request: options.payment_request,
              // settled: false
            },
            {
              amt_paid: invoice.value,
              amt_paid_sat: invoice.value_msat,
              amt_paid_msat: invoice.value,
              settled: true,
              settle_date: new Date().getTime().toString(),
              state: "SETTLED"
            })

    

        await Channel
            .findByIdAndUpdate(
              channel.id,
              { $inc: { 
                  local_balance: -invoice.value, 
                  remote_balance: invoice.value 
                },
              },
            )
        await Channel
          .findOneAndUpdate(
            {$and: [
              {chan_id: channel.chan_id},
              {_id: {$ne: channel.id}}
            ]},
            { $inc: { 
                local_balance:  invoice.value, 
                remote_balance: -invoice.value 
              }
            },
          )
        return {
          invoice: invoice, 
          lnnode: lnnode, 
          channel: channel};
        } catch(err) {
          return new Error("Hoge")
        }
    },
    paymentByOthers:(senderPubkey, receiverPubkey) => {

    },
  }
})()

module.exports = LNnodeServices;