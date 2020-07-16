const lnrpc = require("../protos/rpc_pb");
const InvoiceCtr = require('../../controllers/channel')
const logger = require('../../utils/logger');



async function addInvoice(call, callback) {
  logger.info("call ListChannels");
  let result = await InvoiceCtr.addInvoiceFromSelf(call.request);
  let invoiceResponce = new lnrpc.AddInvoiceResponse();
    invoiceResponce.setRHash(result.r_hash);
    invoiceResponce.setPaymentRequest(result.payment_request)
    invoiceResponce.setAddIndex(0);
  callback(null, invoiceResponce);
}

async function listInvoices(call, callback) {

}

exports.addInvoice = addInvoice;
exports.listInvoices = listInvoices;