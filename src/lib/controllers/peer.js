const logger = require('../utils/logger');
const PeerServices = require('../services/lnnode');
const LNnodeServices  = require('../services/lnnode');

const PeerController = (() => {
  let wsId;
  let nodeIdList = {}
  return {
    init: async (wsname) => {
      let nodes = await LNnodeServices.findByWSName();
      let workspaceIds = WorkspaceServices.findId();
      wsId = workspaceIds.$id;
    },
    new: () => {
      let res = PeerServices.create();
    },
    addPeerToSelf:(senderAddr, options) => {
      PeerServices.create(wsname, senderAddr, options);
      PeerServices.create(wsname, selfAddr, options);
    },
    addPeerFromSelf: (receiverAddr, options) => {
      PeerServices.create(wsname, selfAddr, options);
      PeerServices.create(wsname, receiverAddr, options);
    },
    addPeersByOthers: (senderAddr, receiverAddr, options) => {
      PeerServices.create(wsname, senderAddr, options);
      PeerServices.create(wsname, receiverAddr, options);
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
