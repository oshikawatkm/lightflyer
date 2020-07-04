const logger = require('../utils/logger');
const PeerServices = require('../services/peer');

const ChannelServices = require('../services/channel');

const ChannelController = (() => {
  let nodeIdList = {};
  return {
    init: (config, nodes) => {
      
    },
    new: async () => {
      if(await !PeerServices.isPeer()) {
        return
      }
      ChannelServices.create();
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
