

function getChannels(channels) {
  let channelRes = [];

  channels.forEach(channel => {
    let obj = new Object();
    obj.active         = channel.active;
    obj.remote_pubkey  = channel.remote_pubkey;
    obj.channel_point  = channel.remote_pubkey;
    obj.chan_id        = channel.chan_id;
    obj.capacity       = channel.capacity;
    obj.local_balance  = channel.local_balance;
    obj.remote_balance = channel.remote_balance;
    obj.commit_fee     = channel.commit_fee;
    obj.commit_weight  = channel.commit_weight;
    obj.fee_per_kw     = channel.fee_per_kw;
    obj.unsettled_balance = unsettled_balance;
    obj.total_satoshis_sent = total_satoshis_sent;
    obj.total_satoshis_received = total_satoshis_received;
    obj.num_updates    = channel.num_updates;
    obj.pending_htlcs  = channel.pending_htlcs;
    obj.csv_delay      = channel.csv_delay;
    obj.private        = channel.private;
    obj.initiator      = channel.initiator;
    obj.chan_status_flags = chan_status_flags;
    obj.local_chan_reserve_sat = local_chan_reserve_sat;
    obj.remote_chan_reserve_sat = remote_chan_reserve_sat;
    obj.static_remote_key = static_remote_key;
    obj.commitment_type = commitment_type;
    obj.lifetime       = channel.lifetime;
    obj.uptime         = channel.uptime;
    obj.close_address  = channel.close_address;
    obj.push_amount_sat = channel.push_amount_sat;
    obj.thaw_height    = channel.thaw_height;

    channelRes.push(obj)
  })

  return channelRes;
}









// // TEST
// function getChannels(channels) {
//   let channelRes = [];
//   channels = [1,2]
//   channels.forEach(channel => {
//     var obj = new Object();
//     obj.active         = true
//     obj.remote_pubkey  = "channel.remote_pubkey";
//     obj.channel_point  = "channel.remote_pubkey";
//     obj.chan_id        = "channel.chan_id";
//     obj.capacity       = "channel.capacity";
//     obj.local_balance  = "channel.local_balance";

//     channelRes.push(obj)
//   })

//   return channelRes;
// }





exports.getChannels = getChannels;
// exports.abandon = abandon;
// exports.backup = backup;
// exports.backupRestore = backupRestore;
// exports.backupVerify = backupVerify;
// exports.closed = closed;
// exports.pending = pending;
// exports.transactions = transactions;
// exports.transactionsRoute = transactionsRoute;
