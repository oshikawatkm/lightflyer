const lnrpc = require("../protos/lnrpc_grpc_pb");
const ChannelCtr = require('../../controllers/channel')
const logger = require('../../utils/logger');



async function getChannels(call, callback) {
  logger.info("gRPC getChannels");
  console.log(call.request)
  let result = await ChannelCtr.getAll(call.request);
  let channelResponce = new lnrpc.getChannelsResponce();
  channelResponce.setChannel();
  callback(null, channelResponce);
}

module.exports = getChannels;

