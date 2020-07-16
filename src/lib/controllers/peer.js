const logger = require('../utils/logger');
const PeerServices = require('../services/peer');
const LNnodeServices  = require('../services/lnnode');

const PeerController = (() => {
  let wsId;
  let selfIPubkey;
  let nodeIdList = [];

  function _getTargetOIds (senderIPubkey, receiverIPubkey) {
    let sender = nodeIdList.filter(obj => obj.ipubkey === senderIPubkey);
    let receiver = nodeIdList.filter(obj => obj.ipubkey === receiverIPubkey);

    return {
      senderId:   sender[0].oid,
      receiverId: receiver[0].oid
    }
  }

  function _getTargetOId(ipubkey) {
    let node = nodeIdList.filter(obj => obj.ipubkey === ipubkey);

    return node[0].oid;
  }

  return {
    init: async (workspaceId) => {
      wsId = workspaceId;
      let nodes = await LNnodeServices.find(wsId);
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
      let Oids = _getTargetOIds(selfIPubkey, options.addr.pubkey);
      if(await !PeerServices.isPeer(
        Oids.senderId, 
        Oids.receiverId,
        selfIPubkey,
        options.addr.pubkey
      )) {
        logger.error(`${oids.senderId} and ${oids.receiverId} are not Peer.`)
        // [TASK]: Research Error Message
        return
      }
      console.log(Oids.senderId)
      PeerServices.create(Oids.senderId, selfIPubkey, options);
      PeerServices.create(Oids.receiverId, options.addr.pubkey, options);
    },
    addPeersByOthers: (senderAddr, receiverAddr, options) => {
      PeerServices.create(wsname, senderAddr, options);
      PeerServices.create(wsname, receiverAddr, options);
    },
    getAll: async (options) => {
      console.log(options)
      let oid = _getTargetOId(selfIPubkey);
      let peers = await PeerServices.find(oid);
      return peers;
    },
    get: async (options) => {
      
      let peer = await PeerServices.findOne(oid);
      console.log(peer)
      return peer;
    }
  }
})()

module.exports = PeerController;
