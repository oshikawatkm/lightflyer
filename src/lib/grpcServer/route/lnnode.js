const lnrpc = require("../protos/rpc_pb");
const LNnodeCtr = require('../../controllers/lnnode')
const logger = require('../../utils/logger');



async function sendPaymentSync(call, callback) {
  logger.info("call ListChannels");
  let result = await LNnodeCtr.payment(call.request);
  let paymentResponce = new lnrpc.SendResponse();
  let route = new lnrpc.Route();
  paymentResponce.setPaymentError(false)
  paymentResponce.setPaymentPreimage(result.invoice.r_preimage)
  paymentResponce.setPaymentRoute(route)
  paymentResponce.setPaymentHash(result.invoice.payment_hash)

  callback(null, channelResponce);
}

exports.sendPaymentSync = sendPaymentSync;