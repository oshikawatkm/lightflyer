const mongoose = require('mongoose');
require('../models/LNnode');
const LNnode = mongoose.model('lnnodes');
require ('../models/Channel');
const Channel = mongoose.model('workspaces');
require ('../models/Invoice');
const Invoice = mongoose.model('workspaces');

const LNnodeController = (() => {
  let defaultNodeNames = ["You", "Alice", "Bob", "Charlie", "Dave"]
  let nodes = []
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
      new Channel({
        active: true,
        remote_pubkey: ,
        channel_point: ,
        chan_id: ,
        capacity: ,
        local_balance: local_funding_amount,
        remote_balance: ,
        commit_fee: ,
        commit_weight: ,
        fee_per_kw: ,
        unsettled_balance: ,
        total_satoshis_sent: ,
        total_satoshis_received: ,
        num_updates: ,
        pending_htlcs: [],
        csv_delay: ,
        private: private
      })
      .save()
      .then(() => {
        // 開設時のlocal_amt分nodeからbalanceをマイナス
      })


    },
    addInvoice:() => {
      new Invoice({

      })
      .save()
      .then()
    }
  }
})()

module.exports = LNnodeController;