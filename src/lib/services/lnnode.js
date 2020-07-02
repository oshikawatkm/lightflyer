const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/Workspace');
const Workspace = mongoose.model('workspaces');

const LNnodeController = (() => {
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
    createNodes: (config) => {
      let nodes = []
      for (i = 0; i <= config.nodeNumber - 1 ;i++) {
        let node = new LNnode({
          name: defaultNodeNames[i],
          balanace: config.satoshi,
          publicKey: config.publicKey,
          privateKey: config.privateKey,
          iditity_pubkey: config.iditity_pubkey,
          address: config.address,
          peers: config.peers,
          channels: config.channels
        });
        
        nodes.push(node)
      }
      return nodes;
    },
    create: (config) => {
      let node = new LNnode({
        name: defaultNodeNames[i],
        balanace: config.satoshi,
        publicKey: config.publicKey,
        privateKey: config.privateKey,
        iditity_pubkey: config.iditity_pubkey,
        address: config.address,
        peers: config.peers,
        channels: config.channels
      });
      return nodes;
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

      // Channelを開設
      // 開設申請者
      new Channel({
        active: true,
        remote_pubkey: node_pubkey_string,
        channel_point: "hoge",
        chan_id: Math.random() * 10000000000000000,
        capacity: push_sat,
        local_balance: local_funding_amount,
        remote_balance: push_sat,
        commit_fee: 9050,
        commit_weight: 600,
        fee_per_kw: 12500,
        unsettled_balance: 0,
        total_satoshis_sent: 0,
        total_satoshis_received: 0,
        num_updates: 0,
        pending_htlcs: [],
        csv_delay: 144,
        private: private
      })
      .save()
      .then(() => {
        // 開設時のlocal_amt分nodeからbalanceをマイナス

      })

      // 開設受信者
      new Channel({
        active: true,
        remote_pubkey: YourIPubkey,
        channel_point: "hoge",
        chan_id: Math.random() * 10000000000000000,
        capacity: push_sat,
        local_balance: local_funding_amount,
        remote_balance: push_sat,
        commit_fee: 9050,
        commit_weight: 600,
        fee_per_kw: 12500,
        unsettled_balance: 0,
        total_satoshis_sent: 0,
        total_satoshis_received: 0,
        num_updates: 0,
        pending_htlcs: [],
        csv_delay: 144,
        private: private
      })
      .save()
      .then(() => {
        // 開設時のlocal_amt分nodeからbalanceをマイナス
      })

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

module.exports = LNnodeController;