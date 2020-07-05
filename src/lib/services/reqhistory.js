const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/ReqHistory');

const ReqHistoryServices = (() => {
  return {
    create: (oid, request, sender, type) => {
      new ReqHistory({
        workspace: oid,
        request: request,
        sender: sender,
        receiver: receiver,
        type: type
      })
        .save()

      return;
    },
    find: async (oid) => {
      let reqhistory = await ReqHistory.find({oid})
        .then(res => {
          return res
        });

      return reqhistory;
    },
    findOne: async (workspaceName) => {
      
    },
  }
})()

module.exports = ReqHistoryServices;
