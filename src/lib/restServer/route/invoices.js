const InvoiceCtr = require('../../controllers/invoice')
const invoiceResSchemas = require('../../ResponceSchema/invoices')
const ReqHistoryCtr = require('../../controllers/reqhistory')
const url = require('url');
const logger = require('../../utils/logger');

function invoice() {

}

async function invoices(req, res, data, server) {
  let jsondata = JSON.parse(data);
  if (req.method === "POST") {
    try {
      let result = await InvoiceCtr.addInvoiceFromSelf(jsondata);
      let body = JSON.stringify(invoiceResSchemas.addInvoice(result), undefined, 4);
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write(body);
      res.end();
      ReqHistoryCtr.newInvoice(req.method + " " + url.parse(req.url).pathname, "You", "HTTP")
    } catch(err) {
      logger.error(err)
      res.writeHead(500, {"Content-Type": "application/json"});
      res.write(err);
      res.end();
    }
  } else if (req.method === "GET") {
    try {
      let result = await InvoiceCtr.getAll(jsondata);
      console.log(result)
      let body = JSON.stringify(invoiceResSchemas.getInvoices(result), undefined, 4);
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(body);
      res.end();
    } catch(err) {
      res.writeHead(500, {"Content-Type": "text/html"});
      res.write(err);
      res.end();
    }
  } else {
    res.writeHead(400, {"Content-Type": "text/html"});
    res.write(undefined);
    res.end();
  }
  server.data = ""
}



exports.invoices = invoices;