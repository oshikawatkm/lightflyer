const mongoose = require('mongoose');
require('../models/LNnode');
const LNnode = mongoose.model('lnnodes');
require ('../models/Channel');
const Channel = mongoose.model('channels');
require ('../models/Invoice');
const Invoice = mongoose.model('invoices');

const LNnodeController = (() => {
  let defaultNodeNames = ["You", "Alice", "Bob", "Charlie", "Dave"]
  let nodes = []

  // Validation of add Invoice
  function isChannel (establisherPubkey, participantPubkey) {
    // Channel.findOne({ remote_pubkey: establisherPubkey})
    //   .then(res => {if (!res) { return false}})

    // Channel.findOne({ remote_pubkey: participantPubkey})
    //   .then(res => {if (!res) { return false}})

    return true;
  };

  return {
    factory: (config) => {
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
      console.log(nodes)
      return nodes;
    },
    addPeer:(senderAddr, reciverAdder) => {



      // let senderNodeIndex = nodes.findIndex((node) => {
      //    return node.address === senderAddr
      // })
      // let reciverNodeIndex = nodes.findIndex((node) => { 
      //   return node.address === reciverAdder
      // })
      // nodes[senderNodeIndex].addPeer(reciverAdder)
      // nodes[reciverNodeIndex].addPeer(senderAddr)
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
      // new Channel({
      //   active: true,
      //   remote_pubkey: node_pubkey_string,
      //   channel_point: "hoge",
      //   chan_id: "hoge",
      //   capacity: "hoge",
      //   local_balance: local_funding_amount,
      //   remote_balance: push_sat,
      //   commit_fee: "hoge",
      //   commit_weight: "hoge",
      //   fee_per_kw: "hoge",
      //   unsettled_balance: "hoge",
      //   total_satoshis_sent: "hoge",
      //   total_satoshis_received: "hoge",
      //   num_updates: "hoge",
      //   pending_htlcs: [],
      //   csv_delay: "hoge",
      //   private: private
      // })
      // .save()
      // .then(() => {
      //   // 開設時のlocal_amt分nodeからbalanceをマイナス
      // })

      // 開設受信者
      // new Channel({
      //   active: true,
      //   remote_pubkey: node_pubkey_string,
      //   channel_point: "hoge",
      //   chan_id:  "hoge",
      //   capacity: "hoge",
      //   local_balance: local_funding_amount,
      //   remote_balance: push_sat,
      //   commit_fee: "hoge",
      //   commit_weight: "hoge",
      //   fee_per_kw: "hoge",
      //   unsettled_balance: "hoge",
      //   total_satoshis_sent: "hoge",
      //   total_satoshis_received: "hoge",
      //   num_updates: "hoge",
      //   pending_htlcs: [],
      //   csv_delay: "hoge",
      //   private: private
      // })
      // .save()
      // .then(() => {
      //   // 開設時のlocal_amt分nodeからbalanceをマイナス
      // })

    },
    addInvoice:() => {
      if (!isChannel()) {
        throw new Error()
      }

      // new Invoice({

      // })
      // .save()
      // .then()
    },
    payment:(estabrisherIPubukey, participantIPubukey) => {
      // let estabrisher = LNnode.findOne({ iditity_pubkey: estabrisherIPubukey })
      //   .then(res => { return res })

      // let participant = LNnode.findOne({ iditity_pubkey: participantIPubukey })
      //   .then(res => { return res })

      // Invoice.findOne({ remote_pubkey: establisherPubkey})
      //   .then(res => {if (!res) { return false}})

      
    }
  }
})()

module.exports = LNnodeController;