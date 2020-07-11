const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/ReqHistory');
const ReqHistory = mongoose.model('reqhistorys');

const ReqHistoryServices = (() => {
  return {
    create: (oid, request, sender, receiver, type) => {
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
      let reqhistorys = await ReqHistory.find({workspace: oid}).limit(5)
        .then(res => {
          return res
        });
      return reqhistorys;
    },
    findOne: async (workspaceName) => {
      
    },
  }
})()

module.exports = ReqHistoryServices;
