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
    init: async (workspaceId) => {
      wsId = workspaceId
      let SelfLNnode = await LNnodeServices.findOne(wsId, "You");
      selfIPubkey = SelfLNnode.publicKey;
      selfAddr    = SelfLNnode.address;
    },
    getAll: async () => {
      return await LNnodeServices.find(wsId);
    },
    payment: async (options) => {
      await LNnodeServices.payment(selfIPubkey, options);
    }
  }
})()

module.exports = LNnodeController;