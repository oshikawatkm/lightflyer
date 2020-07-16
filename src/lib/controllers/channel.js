const logger = require('../utils/logger');
const PeerServices = require('../services/peer');
const LNnodeServices = require('../services/lnnode');
const ChannelServices = require('../services/channel');
const randomGenerator = require("../utils/randamGenerator")

const ChannelController = (() => {
  let wsId;
  let selfIPubkey;
  let nodeIdList = [];
  
  function _getTargetOIds (senderIPubkey, receiverIPubkey) {
    let sender = nodeIdList.filter(obj => obj.ipubkey === senderIPubkey);
    let receiver = nodeIdList.filter(obj => obj.ipubkey === receiverIPubkey);
    return {
      senderId:   sender[0].oid,
      receiverId: receiver[0].oid
    }
  }

  function _getTargetOId(ipubkey) {
    let node = nodeIdList.filter(obj => obj.ipubkey == ipubkey);
    return node[0].oid;
  }
  
  return {
    init: async (workspaceId) => {
      wsId = workspaceId;
      let nodes = await LNnodeServices.find(wsId);

      nodes.map(node => {
        let obj = new Object();
        obj.name = node.name;
        obj.ipubkey = node.iditity_pubkey;
        obj.oid  = node._id;
        if (node.name === "You") {
          selfIPubkey = node.iditity_pubkey;
        }
        nodeIdList.push(obj)
      })
    },
    new: async () => {
      if(await !PeerServices.isPeer()) {
        // [TASK]: Research Error Message
        return
      }
      ChannelServices.create();
    },
    addChannelToSelf:async (senderIPubkey, options) => {
      let oids = _getTargetOIds();
      if(await !PeerServices.isPeer(wsname, selfIPubkey)) {
        return
      }
      
      // Generate Channel ID
      let chan_id = Math.random() * 10000000000000000;
      let channelReceiverOption = {
        capacity:  options.push_sat,
        local_balance:  0,
        remote_balance: options.push_sat,
        private:   options.private
      }

      //Create Channel(Sender)
      await ChannelServices.create(wsname, senderIPubkey, chan_id, options);
      //Create Channel(Receiver)
      await ChannelServices.create(wsname, selfIPubkey, chan_id, channelReceiverOption);

      return;
    },
    addChannelFromSelf:async (options) => {
      // Generate Channel ID
      let chan_id = Math.random() * 10000000000000000;
      let channelReceiverOption = {
        node_pubkey: selfIPubkey,
        node_pubkey_string: selfIPubkey,
        local_funding_amount:  "0",
        push_sat: "0",
        remote_balance: options.push_sat,
        private:   options.private
      }
      options.remote_balance = "0";
      let channel_point = randomGenerator(64)
      try {

        let oids = _getTargetOIds(selfIPubkey, options.node_pubkey);
        if(await !PeerServices.isPeer(
          oids.senderId,
          oids.receiverId,
          selfIPubkey,
          options.node_pubkey
        )) {
          logger.error(`${oids.senderId} and ${oids.receiverId} are not Peer.`)
          return
        }
        await ChannelServices.create(oids.senderId, channel_point, chan_id, options);
        await ChannelServices.create(oids.receiverId, channel_point, chan_id, channelReceiverOption);
        await LNnodeServices.funding(wsId, oids.senderId, parseInt(options.push_sat, 10));
      } catch(err) {
        logger.error(err)
      }
      return { 
        funding_txid_bytes: "64",
        funding_txid_str: channel_point,
        output_index: 0
      };
    },
    addChannelByOthers:async (senderIPubkey,options) => {
      if(await !PeerServices.isPeer(wsname, selfIPubkey)) {
        return
      }
      // Generate Channel ID
      let chan_id = Math.random() * 10000000000000000;
      let channelReceiverOption = {
        capacity:  options.push_sat,
        local_balance:  "0",
        remote_balance: options.push_sat,
        private:   options.private
      }
      options.remote_balance = "0";

      //Create Channel(Sender)
      await ChannelServices.create(wsname, senderIPubkey, chan_id, options);
      //Create Channel(Receiver)
      await ChannelServices.create(wsname, selfIPubkey, chan_id, channelReceiverOption);

      return;
    },
    getAll: async () => {
      let oid = _getTargetOId(selfIPubkey)
      return await ChannelServices.find(oid);
    },
    get: async (workspaceName) => {

    },
    confirmed: async () => {

    },
    close: async (funding_txid_str, output_index) => {
      let oid = _getTargetOId(selfIPubkey)
      return await ChannelServices.close(wsId, oid, funding_txid_str, output_index);
    }
  }
})()

module.exports = ChannelController;
