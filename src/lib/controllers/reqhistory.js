const logger = require('../utils/logger');
const ReqHistoryervices = require('../services/reqhistory');
const LNnodeServices  = require('../services/lnnode');

const ReqHistoryController = (() => {
  let wsId;
  function _extractIPubkey(str) {
    let index   = str.indexOf("@");
    let ipubkey = str.slice(0, index);
    return ipubkey;
  }

  return {
    init: async (wsId) => {
      wsId = wsId;
    },
    newChannel: async (req, sender, receiverpubkey, type) => {
      let receiver = await LNnodeServices.findOneByPubkey(receiverpubkey);
      await ReqHistoryervices.create(wsId, req, sender, receiver.name, type);
    },
    newPeer: async (req, sender, addr, type) => {
      let receiver = await LNnodeServices.findOneByPubkey(addr);
      await ReqHistoryervices.create(wsId, req, sender, receiver.name, type);
    },
    newInvoice: async(req, sender, type) => {
      await ReqHistoryervices.create(wsId, req, sender, "-", type);
    },
    getAll: async () => {
      return await ReqHistoryervices.find(wsId);
    },
    get: async (workspaceName) => {
      return await ReqHistoryervices.findOne()
    },
  }
})()

module.exports = ReqHistoryController;
