const logger = require('../utils/logger');
const InvoiceServices = require('../services/invoice');
const LNnodeServices = require('../services/lnnode');
const ChannelServices = require('../services/channel');
const { Channel } = require('grpc');

const ChannelController = (() => {
  let wsId;
  let selfIPubkey;
  let nodeIdList = [];
  
  function _getTargetOIds (senderIPubkey, receiverIPubkey) {
    let sender = nodeIdList.filter(obj => obj.ipubkey === senderIPubkey);
    let receiver = nodeIdList.filter(obj => obj.ipubkey === receiverIPubkey);

    return {
      senderId:   sender.oid,
      receiverId: receiver.oid
    }
  }

  function _getTargetOId(ipubkey) {
    let node = nodeIdList.filter(obj => obj.ipubkey === ipubkey);

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
    addInvoiceToSelf:async (senderIPubkey, options) => {
      let oids = _getTargetOIds();
      if(await !ChannelServices.isChannel()) {
        return
      }
      //Create Channel(Sender)
      await InvoiceServices.create(oid, senderIPubkey, options);
      //Create Channel(Receiver)
      await InvoiceServices.create(oid, selfIPubkey, channelReceiverOption);

      return;
    },
    addInvoiceFromSelf:async (options) => {
      try {
        let nodeid = _getTargetOId(selfIPubkey);
        if(await !ChannelServices.hasChannel(
          nodeid,
          selfIPubkey,
        )) {
          logger.error(`You have no Channels.`)
          return
        }
        return InvoiceServices.create(wsId, nodeid, options);
      } catch(err) {
        logger.error(err)
      }
    },
    addCInvoiceByOthers:async (senderIPubkey,options) => {
      if(await !ChannelServices.isChannel()) {
        return
      }

      //Create Channel(Sender)
      await InvoiceServices.create(wsname, senderIPubkey, chan_id, options);
      //Create Channel(Receiver)
      await InvoiceServices.create(wsname, selfIPubkey, chan_id, channelReceiverOption);

      return;
    },
    getAll: async (options) => {
      let nodeid = _getTargetOId(selfIPubkey);
      return await InvoiceServices.find(nodeid, options);
    },
    getAllInWs: async () => {
      let invoices = await InvoiceServices.findByWsId(wsId);
      return invoices;
    },
    get: async (workspaceName) => {

    },
    confirmed: async () => {

    }
  }
})()

module.exports = ChannelController;
