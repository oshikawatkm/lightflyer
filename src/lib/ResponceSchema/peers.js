

function getPeers(peers) {
  let peersRes = [];
  peers.forEach(peer => {
    let obj = new Object();
    obj.pub_key         = peer.pub_key;
    obj.address  = peer.address;
    obj.bytes_sent  = peer.bytes_sent;
    obj.sat_sent        = peer.sat_sent;
    obj.sat_recv       = peer.sat_recv;
    obj.inbound  = peer.inbound;
    obj.ping_time = peer.ping_time;

    peersRes.push(obj)
  })

  return peersRes;
}

function addPeer(peer) {
  let peerRes = new Object();
  peerRes.pub_key       = peer.pub_key;
  peerRes.address  = peer.address;
  peerRes.bytes_sent  = peer.bytes_sent;
  peerRes.sat_sent        = peer.sat_sent;
  peerRes.sat_recv       = peer.sat_recv;
  peerRes.inbound  = peer.inbound;
  peerRes.ping_time = peer.ping_time;

  return peerRes;
}

exports.addPeer = addPeer;
exports.getPeers = getPeers;














exports.getPeers = getPeers;
// exports.abandon = abandon;
// exports.backup = backup;
// exports.backupRestore = backupRestore;
// exports.backupVerify = backupVerify;
// exports.closed = closed;
// exports.pending = pending;
// exports.transactions = transactions;
// exports.transactionsRoute = transactionsRoute;
