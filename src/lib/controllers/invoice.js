const logger = require('../utils/logger');
const PeerServices = require('../services/peer');
const LNnodeServices = require('../services/lnnode');

const ChannelServices = require('../services/channel');

const ChannelController = (() => {
  let wsId;
  let selfIPubkey;
  let nodeIdList = [];
  
  function _getTargetOIds (senderIPubkey, senderIPubkey) {
    let sender = nodeIdList.filter(obj => obj.ipubkey === senderIPubkey);
    let receiver = nodeIdList.filter(obj => obj.ipubkey === senderIPubkey);

    return {
      senderId:   sender.oid,
      receiverId: receiver.oid
    }
  }

  return {
    init: async (workspaceId) => {
      wsId = workspaceId;
      let nodes = await LNnodeServices.find(wsId);
      console.log(nodes)
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
    addInvoiceToSelf:async (senderIPubkey, options) => {
      let oids = _getTargetOIds();
      if(await !PeerServices.isPeer(wsname, selfIPubkey)) {
        return
      }
      // Generate Channel ID
      let chan_id = Math.random() * 10000000000000000;
      let channelReceiverOption = {
        capacity:  option.push_sat,
        local_balance:  0,
        remote_balance: option.push_sat,
        private:   option.private
      }

      //Create Channel(Sender)
      await ChannelServices.create(wsname, senderIPubkey, chan_id, options);
      //Create Channel(Receiver)
      await ChannelServices.create(wsname, selfIPubkey, chan_id, channelReceiverOption);

      return;
    },
    addInvoiceFromSelf:async (options) => {
      // Generate Channel ID
      let chan_id = Math.random() * 10000000000000000;
      let channelReceiverOption = {
        node_pubkey: selfIPubkey,
        node_pubkey_string: selfIPubkey,
        capacity:  options.push_sat,
        local_funding_amount:  0,
        push_sat: 0,
        remote_balance: options.push_sat,
        private:   options.private
      }
      try {
        let oids = _getTargetOIds();
        if(await !PeerServices.isPeer(
          oids.senderId,
          oids.receiverId,
          selfIPubkey,
          options.node_pubkey
        )) {
          logger.error(`${oids.senderId} and ${oids.receiverId} are not Peer.`)
          return
        }

        ChannelServices.create(oids.senderId, chan_id, options);
        ChannelServices.create(oids.receiverId, chan_id, channelReceiverOption);
      } catch(err) {
        logger.error(err)
      }
      return;
    },
    addCInvoiceByOthers:async (senderIPubkey,options) => {
      if(await !PeerServices.isPeer(wsname, selfIPubkey)) {
        return
      }
      // Generate Channel ID
      let chan_id = Math.random() * 10000000000000000;
      let channelReceiverOption = {
        capacity:  option.push_sat,
        local_balance:  0,
        remote_balance: option.push_sat,
        private:   option.private
      }

      //Create Channel(Sender)
      await ChannelServices.create(wsname, senderIPubkey, chan_id, options);
      //Create Channel(Receiver)
      await ChannelServices.create(wsname, selfIPubkey, chan_id, channelReceiverOption);

      return;
    },
    getAll: async () => {
      return await ChannelServices.find();
    },
    get: async (workspaceName) => {

    },
    confirmed: async () => {

    },
    close: async () => {
      
    }
  }
})()

module.exports = ChannelController;
