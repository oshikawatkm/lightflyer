const logger = require('../utils/logger');
const PeerServices = require('./services/lnnode');

const PeerController = (() => {
  return {
    init: (config, nodes) => {
      
    },
    new: () => {
      let res = PeerServices.create();
    },
    getAll: async () => {
      let peers = await PeerServices.findAll();
      return peers;
    },
    get: async (workspaceName) => {
      let peer = await PeerServices.findOne();
      return peer;
    }
  }
})()

module.exports = PeerController;
