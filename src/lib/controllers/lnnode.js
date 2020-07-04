const WorkdspaceServices = require('../services/workspace');
const LNnodeServices  = require('../services/lnnode');
const PeerServices    = require('../services/peer');
const ChannelServices = require('../services/channel');
const InvoiceServices = require('../services/invoice');


const LNnodeController = (() => {
  let workspace;
  let wsId;
  let selfIPubkey;
  let selfAddr;

  return {
    init: async (wsname) => {
      workspace = await WorkdspaceServices.findId(wsname);
      wsId = workspace["_id"];
      let SelfLNnode = await LNnodeServices.findOne(wsId, "You");
      console.log(SelfLNnode)
      selfIPubkey = SelfLNnode.publicKey;
      selfAddr    = SelfLNnode.address;
    },
    factory: async (wsId, config) => {
      for (i = 0; i <= config.nodeNumber - 1 ;i++) {
        await LNnodeServices.create(wsId, config);
      }
    },
    addChannelToSelf:async (senderIPubkey,options) => {
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
    addChannelFromSelf:async (receiverIPubkey, options) => {
      if(await !PeerServices.isPeer()) {
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

      ChannelServices.create(wsname, selfIPubkey, chan_id, options);
      ChannelServices.create(wsname, receiverIPubkey, chan_id, channelReceiverOption);

      return;
    },
    addInvoiceByOthers:async (senderIPubkey, receiverIPubkey) => {
      if(await !ChannelServices.isChannel()) {
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
      ChannelServices.create(wsname, senderIPubkey, chan_id, options);
      ChannelServices.create(wsname, receiverIPubkey, chan_id, channelReceiverOption);
      return;
    },
    addInvoice:() => {
      InvoiceServices.create()
    },
    payment:(estabrisherIPubukey, participantIPubukey) => {
      
    },
    addChannelByOthers: (senderPubkey, receiverPubkey) => {

    },
    paymentByOthers:(senderPubkey, receiverPubkey) => {

    },
  }
})()

module.exports = LNnodeController;