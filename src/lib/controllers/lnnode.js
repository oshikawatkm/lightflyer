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
    getAllWithCount: async () => {
      let lnnodes = await LNnodeServices.find(wsId);
      let resultArr = [];

      for (let i = 0; i <= lnnodes.length -1; i++) {
        let ln = new Object;
        let channelCount = await ChannelServices.findCount(lnnodes[i]._id);
        let peerCount = await PeerServices.findCount(lnnodes[i]._id);
        ln.name = lnnodes[i].name;
        ln.balance = lnnodes[i].balance;
        ln.channelCount = channelCount;
        ln.peerCount = peerCount;
        resultArr.push(ln)
      }
      
      return resultArr;
    },
    payment: async (options) => {
      await LNnodeServices.payment(selfIPubkey, options);
    }
  }
})()

module.exports = LNnodeController;