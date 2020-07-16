const lnrpc = require("../protos/rpc_pb");
const PeerCtr = require('../../controllers/peer')
const logger = require('../../utils/logger');



async function connectPeer(call, callback) {
  logger.info("call ListChannels");
  await PeerCtr.addPeerFromSelf(call.request);
  let peerResponce = new lnrpc.ConnectPeerResponse();
  callback(null, peerResponce);
}

async function listPeers(call, callback) {

}

exports.listChannels = connectPeer;
exports.openChannel = listPeers;