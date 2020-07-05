const logger = require('../utils/logger');
const ReqHistoryervices = require('../services/reqhistory');

const ReqHistoryController = (() => {
  let wsId;
  
  return {
    init: async (workspaceId) => {
      wsId = workspaceId;
    },
    new: async () => {
      await ReqHistoryervices.create(oid, request, sender, type);
    },
    getAll: async (oid) => {
      return await ReqHistoryervices.find(oid);
    },
    get: async (workspaceName) => {

    },
  }
})()

module.exports = ReqHistoryController;
