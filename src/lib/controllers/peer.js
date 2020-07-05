const logger = require('../utils/logger');
const PeerServices = require('../services/peer');
const LNnodeServices  = require('../services/lnnode');

const PeerController = (() => {
  let wsId;
  let selfIPubkey;
  let nodeIdList = [];

  function _extractIPubkey(str) {
    let index   = str.indexOf("@");
    let ipubkey = str.slice(0, index);
    return ipubkey;
  }

  function _getTargetOIds (senderIPubkey, receiverIPubkey) {
    let sender = nodeIdList.filter(obj => obj.ipubkey === senderIPubkey);
    let receiver = nodeIdList.filter(obj => obj.ipubkey === receiverIPubkey);

    return {
      senderId:   sender.oid,
      receiverId: receiver.oid
    }
  }

  return {
    init: async (workspaceId) => {
      wsId = workspaceId;
      let nodes = await LNnodeServices.find(wsId);
      console.log(nodes)
      nodes.map(node => {
        let obj = new Object();
        obj.name = node.name;
        obj.ipubkey = node.iditity_pubkey;
        obj.oid  = node._id;
        if (node.name === "You") {
          selfIPubkey = node.iditity_pubkey;
        }
        nodeIdList.push(obj)
      })
    },
    new: () => {
      let res = PeerServices.create();
    },
    addPeerToSelf:async (senderIPubkey, options) => {
      let Oids = _getTargetOIds(senderIPubkey, selfIPubkey);
      await PeerServices.isPeer(Oids.senderId, selfIPubkey, options);
      PeerServices.create(Oids.senderId, selfIPubkey, options);
      // let receiverOptions = { add: }
      PeerServices.create(Oids.receiverId, senderIPubkey, receiverOptions);
    },
    addPeerFromSelf:async (options) => {
      let receiverIPubkey = _extractIPubkey(options.addr);
      let Oids = _getTargetOIds(selfIPubkey, receiverIPubkey);
      if(await !PeerServices.isPeer(
        Oids.senderId, 
        Oids.receiverId,
        selfIPubkey,
        receiverIPubkey
      )) {
        logger.error(`${oids.senderId} and ${oids.receiverId} are not Peer.`)
        // [TASK]: Research Error Message
        return
      }
      PeerServices.create(Oids.senderId, selfIPubkey, options);
      PeerServices.create(Oids.receiverId, receiverIPubkey, options);
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
