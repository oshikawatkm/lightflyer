const lnrpc = require("../protos/rpc_pb");
const ChannelCtr = require('../../controllers/channel')
const logger = require('../../utils/logger');



async function listChannels(call, callback) {
  logger.info("call ListChannels");
  let result = await ChannelCtr.getAll(call.request);
  let channelResponce = new lnrpc.listChannelsResponse();
  for (let i = 0; i <= result.length - 1;i++) {
    let channel = new lnrpc.Channel();
    let htlc = new lnrpc.Htlc();
    channel.setActive(result[i].active)
    channel.setRemotePubkey(result[i].remote_pubkey)
    channel.setChannelPubkey(result[i].channel_pubkey)
    channel.setChannelPoint(result[i].channel_point)
    channel.setChanId(result[i].chan_id.toString())
    channel.setCapacity(result[i].capacity.toString())
    channel.setLocalBalance(result[i].local_balance.toString())
    channel.setRemoteBalance(result[i].remote_balance.toString())
    channel.setCommitFee(result[i].commit_fee.toString())
    channel.setCommitWeight(result[i].commit_weight.toString())
    channel.setFeePerKw(result[i].fee_per_kw.toString())
    channel.setUnsettledBalance(result[i].unsettled_balance.toString())
    channel.setTotalSatoshisSent(result[i].total_satoshis_sent.toString())
    channel.setTotalSatoshisReceived(result[i].total_satoshis_received.toString())
    channel.setNumUpdates(result[i].num_updates.toString())
    channel.setPendingHtlcs(htlc)
    channel.setCsvDelay(result[i].csv_delay.toString())
    channel.setPrivate(result[i].private)

    channelResponce.setChannel(channel);
  }
  callback(null, channelResponce);
}

async function openChannel(call, callback) {
  logger.info("call openChannel");
  let result = await ChannelCtr.addChannelFromSelf(call.request);
  let channelResponce = new lnrpc.OpenStatusUpdate();
  let pending_update = new lnrpc.PendingUpdate();
  let channel_open_update = new lnrpc.ChannelOpenUpdate();
  let channel_point = new lnrpc.ChannelPoint()
  pending_update.setTxid(result.txId)
  pending_update.setOutputIndex(result.output_index)
  channel_point.setFundingTxidBytes(result.funding_txid_str)
  channel_point.setFundingTxidBytes(result.funding_txid_str)
  channel_point.setOutputIndex(result.output_index)
  channel_open_update.setChannelPoint(channel_point)
  channelResponce.setPendingChanId(0)
  channelResponce.setChanOpen(channel_open_update)
  channelResponce.setPsbtFund()
  channelResponce.setChanPending(0)
  callback(null, channelResponce);
}

async function closeChannel(call, callback) {
  logger.info("call openChannel");
  let result = await ChannelCtr.close(call.request);
  let channelResponce = new lnrpc.CloseStatusUpdate();
  let pending_update = new lnrpc.PendingUpdate();
  let channel_close_update = new lnrpc.ChannelCloseUpdate();
  pending_update.setTxId(result.txId)
  pending_update.setTxId(result.output_index)
  channel_close_update.setClosingTxid()
  channel_close_update.setSuccess(true)
  channelResponce.setClosePending(pending_update)
  channelResponce.setChannelCloseUpdate(channel_close_update)
  callback(null, channelResponce);
}


exports.listChannels = listChannels;
exports.openChannel = openChannel;
exports.closeChannel = closeChannel;

