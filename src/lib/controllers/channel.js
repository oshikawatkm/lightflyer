const logger = require('../utils/logger');
const PeerServices = require('../services/peer');

const ChannelServices = require('../services/channel');

const ChannelController = (() => {
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
    destroy: () => {
      
    }
  }
})()

module.exports = ChannelController;
