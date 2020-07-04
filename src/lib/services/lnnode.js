const logger = require('../utils/logger');
const bitcoinjs = require('bitcoinjs-lib');
const mongoose = require('mongoose');
require ('../models/Workspace');
const Workspace = mongoose.model('workspaces');
const LNnode = mongoose.model('lnnodes');

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

  function _genChanId() {
    
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
    addPeer:(senderAddr, reciverAdder) => {



      let senderNodeIndex = nodes.findIndex((node) => {
         return node.address === senderAddr
      })
      let reciverNodeIndex = nodes.findIndex((node) => { 
        return node.address === reciverAdder
      })
      nodes[senderNodeIndex].addPeer(reciverAdder)
      nodes[reciverNodeIndex].addPeer(senderAddr)
    },
    addChannel:(
      node_pubkey, 
      node_pubkey_string,
      local_funding_amount,
      push_sat,
      target_conf,
      sat_per_byte,
      private,
      min_htlc_msat,
      remote_csv_delay,
      min_confs,
      spend_unconfirmed,
      close_address,
      funding_shim
      ) => {

    
    },
    addInvoice:() => {
      if (!isChannel()) {
        throw new Error()
      }

      new Invoice({

      })
      .save()
      .then()
    },
    payment:(estabrisherIPubukey, participantIPubukey) => {
      let estabrisher = LNnode.findOne({ iditity_pubkey: estabrisherIPubukey })
        .then(res => { return res })

      let participant = LNnode.findOne({ iditity_pubkey: participantIPubukey })
        .then(res => { return res })

      Invoice.findOne({ remote_pubkey: establisherPubkey})
        .then(res => {if (!res) { return false}})
    },
    addPeersByOthers: (senderPubkey, receiverPubkey) => {

    },
    addChannelByOthers: (senderPubkey, receiverPubkey) => {

    },
    addInvoiceByOthers: (senderPubkey, receiverPubkey) => {

    },
    paymentByOthers:(senderPubkey, receiverPubkey) => {

    },
  }
})()

module.exports = LNnodeServices;