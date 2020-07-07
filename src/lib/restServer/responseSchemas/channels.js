

function addChannel(channel) {
  let channelRes = new Object();
  channelRes.active         = channel.active;
  channelRes.remote_pubkey  = channel.remote_pubkey;
  channelRes.channel_point  = channel.remote_pubkey;
  channelRes.chan_id        = channel.chan_id;
  channelRes.capacity       = channel.capacity;
  channelRes.local_balance  = channel.local_balance;
  channelRes.remote_balance = channel.remote_balance;
  channelRes.commit_fee     = channel.commit_fee;
  channelRes.commit_weight  = channel.commit_weight;
  channelRes.fee_per_kw     = channel.fee_per_kw;
  channelRes.unsettled_balance = unsettled_balance;
  channelRes.total_satoshis_sent = total_satoshis_sent;
  channelRes.total_satoshis_received = total_satoshis_received;
  channelRes.num_updates    = channel.num_updates;
  channelRes.pending_htlcs  = channel.pending_htlcs;
  channelRes.csv_delay      = channel.csv_delay;
  channelRes.private        = channel.private;
  channelRes.initiator      = channel.initiator;
  channelRes.chan_status_flags = chan_status_flags;
  channelRes.local_chan_reserve_sat = local_chan_reserve_sat;
  channelRes.remote_chan_reserve_sat = remote_chan_reserve_sat;
  channelRes.static_remote_key = static_remote_key;
  channelRes.commitment_type = commitment_type;
  channelRes.lifetime       = channel.lifetime;
  channelRes.uptime         = channel.uptime;
  channelRes.close_address  = channel.close_address;
  channelRes.push_amount_sat = channel.push_amount_sat;
  channelRes.thaw_height    = channel.thaw_height;

  return channelRes;
}






function getChannels(channels) {
  let channelsRes = [];

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
    obj.unsettled_balance = channel.unsettled_balance;
    obj.total_satoshis_sent = channel.total_satoshis_sent;
    obj.total_satoshis_received = channel.total_satoshis_received;
    obj.num_updates    = channel.num_updates;
    obj.pending_htlcs  = channel.pending_htlcs;
    obj.csv_delay      = channel.csv_delay;
    obj.private        = channel.private;
    obj.initiator      = channel.initiator;
    obj.chan_status_flags = channel.chan_status_flags;
    obj.local_chan_reserve_sat = channel.local_chan_reserve_sat;
    obj.remote_chan_reserve_sat = channel.remote_chan_reserve_sat;
    obj.static_remote_key = channel.static_remote_key;
    obj.commitment_type = channel.commitment_type;
    obj.lifetime       = channel.lifetime;
    obj.uptime         = channel.uptime;
    obj.close_address  = channel.close_address;
    obj.push_amount_sat = channel.push_amount_sat;
    obj.thaw_height    = channel.thaw_height;

    channelsRes.push(obj)
  })

  return channelsRes;
}



function getChannel(channel) {
  let channelRes = new Object();
  channelRes.active         = channel.active;
  channelRes.remote_pubkey  = channel.remote_pubkey;
  channelRes.channel_point  = channel.remote_pubkey;
  channelRes.chan_id        = channel.chan_id;
  channelRes.capacity       = channel.capacity;
  channelRes.local_balance  = channel.local_balance;
  channelRes.remote_balance = channel.remote_balance;
  channelRes.commit_fee     = channel.commit_fee;
  channelRes.commit_weight  = channel.commit_weight;
  channelRes.fee_per_kw     = channel.fee_per_kw;
  channelRes.unsettled_balance = unsettled_balance;
  channelRes.total_satoshis_sent = total_satoshis_sent;
  channelRes.total_satoshis_received = total_satoshis_received;
  channelRes.num_updates    = channel.num_updates;
  channelRes.pending_htlcs  = channel.pending_htlcs;
  channelRes.csv_delay      = channel.csv_delay;
  channelRes.private        = channel.private;
  channelRes.initiator      = channel.initiator;
  channelRes.chan_status_flags = chan_status_flags;
  channelRes.local_chan_reserve_sat = local_chan_reserve_sat;
  channelRes.remote_chan_reserve_sat = remote_chan_reserve_sat;
  channelRes.static_remote_key = static_remote_key;
  channelRes.commitment_type = commitment_type;
  channelRes.lifetime       = channel.lifetime;
  channelRes.uptime         = channel.uptime;
  channelRes.close_address  = channel.close_address;
  channelRes.push_amount_sat = channel.push_amount_sat;
  channelRes.thaw_height    = channel.thaw_height;

  return channelRes;
}



function payment(channel) {
  let channelRes = new Object();
  channelRes.active         = channel.active;
  channelRes.remote_pubkey  = channel.remote_pubkey;
  channelRes.channel_point  = channel.remote_pubkey;
  channelRes.chan_id        = channel.chan_id;
  channelRes.capacity       = channel.capacity;
  channelRes.local_balance  = channel.local_balance;
  channelRes.remote_balance = channel.remote_balance;
  channelRes.commit_fee     = channel.commit_fee;
  channelRes.commit_weight  = channel.commit_weight;
  channelRes.fee_per_kw     = channel.fee_per_kw;
  channelRes.unsettled_balance = unsettled_balance;
  channelRes.total_satoshis_sent = total_satoshis_sent;
  channelRes.total_satoshis_received = total_satoshis_received;
  channelRes.num_updates    = channel.num_updates;
  channelRes.pending_htlcs  = channel.pending_htlcs;
  channelRes.csv_delay      = channel.csv_delay;
  channelRes.private        = channel.private;
  channelRes.initiator      = channel.initiator;
  channelRes.chan_status_flags = chan_status_flags;
  channelRes.local_chan_reserve_sat = local_chan_reserve_sat;
  channelRes.remote_chan_reserve_sat = remote_chan_reserve_sat;
  channelRes.static_remote_key = static_remote_key;
  channelRes.commitment_type = commitment_type;
  channelRes.lifetime       = channel.lifetime;
  channelRes.uptime         = channel.uptime;
  channelRes.close_address  = channel.close_address;
  channelRes.push_amount_sat = channel.push_amount_sat;
  channelRes.thaw_height    = channel.thaw_height;

  return channelRes;
}














exports.addChannel = addChannel;
exports.getChannels = getChannels;
exports.getChannel = getChannel;
exports.payment = payment;
// exports.abandon = abandon;
// exports.backup = backup;
// exports.backupRestore = backupRestore;
// exports.backupVerify = backupVerify;
// exports.closed = closed;
// exports.pending = pending;
// exports.transactions = transactions;
// exports.transactionsRoute = transactionsRoute;
