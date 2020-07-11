const InvoiceCtr = require('../../controllers/invoice')
const channelResSchemas = require('../../ResponceSchema/channels')

function invoice() {

}

async function invoices(req, res) {
  if (req.method === "POST") {
    try {
      let result = await InvoiceCtr.addInvoiceFromSelf(req.options);
      let body = JSON.stringify(channelResSchemas.new(result), undefined, 4);
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write(body);
      res.end();
    } catch(err) {
      res.writeHead(500, {"Content-Type": "application/json"});
      res.write(err);
      res.end();
    }
  } else if (req.method === "GET") {
    try {
      let result = await InvoiceCtr.getAll(req.options);
      let body = JSON.stringify(channelResSchemas.getChannels(result), undefined, 4);
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
}



exports.invoice = invoice;