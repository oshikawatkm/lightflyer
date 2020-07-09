const logger = require('../utils/logger');
const bitcoinjs = require('bitcoinjs-lib');
const mongoose = require('mongoose');
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
    create: async (wsId, config) => {
      let keyPair = bitcoinjs.ECPair.makeRandom();
      let privateKey = keyPair.toWIF();
      let publicKey = keyPair.publicKey.toString('hex');
      new LNnode({
        workspace: wsId,
        name: defaultNodeNames[i],
        balanace: config.satoshi,
        publicKey: publicKey,
        privateKey: privateKey,
        iditity_pubkey: publicKey,
        address: config.address,
      })
        .save()
        .catch(err => logger.error(err))

    },
    find:async (oid) => {
      let lns = await LNnode.find({workspace: oid})
        .then(res => {return res})
      return lns;
    },
    findOne: async (oid, name) => {
      let ln = await LNnode.findOne({workspace: oid, name: name})
        .then(res => {return res})
      return ln;
    },
    findOneByPubkey: async (pubkey) => {

      console.log(pubkey)
      let ln = await LNnode.findOne({publicKey: pubkey})
        .then(res => {
          console.log(res)
          return res
        })
        console.log(ln)
      return ln;
    },
    funding:async (oid, push_sat) => {
      // 開設時のlocal_amt分nodeからbalanceをマイナス
      await LNnode.findByIdAndUpdate(
        oid,
        {  $inc: { balance: -push_sat } }
      )
      .then((res, err) => {
        if (err) console.log(err);
        console.log(res);
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
        console.log(channel.chan_id)
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
        } catch(err) {
          return new Error("Hoge")
        }
      return;
    },
    paymentByOthers:(senderPubkey, receiverPubkey) => {

    },
  }
})()

module.exports = LNnodeServices;