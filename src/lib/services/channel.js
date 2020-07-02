const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/Channel');
const Channel = mongoose.model('channels');
const db = require('../../../cfg/db');

const ChannelService = (() => {
  return {
    create: (config, nodes) => {
      
    },
    find: async () => {
      let workspaces = await Channel.find()
        .then(res => {
          return res
        });

      return workspaces;
    },
    findOne: async (workspaceName) => {
      let channel = await Channel.findOne({name: workspaceName})
        .then(res => {
          return res
        })
      return channel
    },
    destroy: () => {
      
    }
  }
})()

module.exports = ChannelService;
