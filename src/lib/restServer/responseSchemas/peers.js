

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

  return chanpeersResnels;
}













exports.getPeers = getPeers;
// exports.abandon = abandon;
// exports.backup = backup;
// exports.backupRestore = backupRestore;
// exports.backupVerify = backupVerify;
// exports.closed = closed;
// exports.pending = pending;
// exports.transactions = transactions;
// exports.transactionsRoute = transactionsRoute;
