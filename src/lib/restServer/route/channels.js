const ChannelCtr = require('../../controllers/channel')
const LNnodeCtr = require('../../controllers/lnnode')
const ReqHistoryCtr = require('../../controllers/reqhistory')
const channelResSchemas = require('../../ResponceSchema/channels')
const invoiceResSchemas = require('../../ResponceSchema/invoices');
const url = require('url');
const logger = require('../../utils/logger');

async function channels(req, res, data, server) {
  if (req.method === "POST") {
    try {
      let jsondata = JSON.parse(data);
      let result = await ChannelCtr.addChannelFromSelf(jsondata)
      let body = JSON.stringify(channelResSchemas.addChannel(result), undefined, 4);
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write(body);
      res.end();
      ReqHistoryCtr.newChannel(req.method + " " + url.parse(req.url).pathname, "You", jsondata.node_pubkey_string, "HTTP")
    } catch(err) {
      logger.error(err)
      res.writeHead(500, {"Content-Type": "application/json"});
      res.write(err);
      res.end();
    }
  } else if (req.method === "GET") {
    try {
      let result = await ChannelCtr.getAll(jsondata);
      let body =  JSON.stringify(await channelResSchemas.getChannels(result), undefined, 4);
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write(body);
      res.end();
    } catch(err) {
      logger.error(err)
      res.writeHead(500, {"Content-Type": "application/json"});
      res.write(err);
      res.end();
    }
  } else if(req.method === "DELETE") {
    try {
      console.log(url.parse(req.url))
      let params = req.url.split("/")
      let result = await ChannelCtr.close(params[3], params[4]);
      let body = JSON.stringify(await channelResSchemas.closed(result), undefined, 4);
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write(body);
      res.end();
    } catch(err) {
      logger.error(err)
      res.writeHead(500, {"Content-Type": "application/json"});
      res.write(err);
      res.end();
    }
  } else {
    res.writeHead(400, {"Content-Type": "application/json"});
    res.write(undefined);
    res.end();
  }
  server.data = ""
}

async function transactions(req, res, data, server) {
  let jsondata = JSON.parse(data);
  if (req.method === "POST") {
    try {
      let result = await LNnodeCtr.payment(jsondata)
      console.log(result)
      let body = JSON.stringify(channelResSchemas.payment(result), undefined, 4);
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write(body);
      res.end();
      // ReqHistoryCtr.newChannel(req.method + " " + url.parse(req.url).pathname, "You", result, "HTTP")
    } catch(err) {
      logger.error(err)
      res.writeHead(500, {"Content-Type": "application/json"});
      res.write(err);
      res.end();
    }
  } else {
    res.writeHead(400, {"Content-Type": "application/json"});
    res.write(undefined);
    res.end();
  }
  server.data = ""
}

function pending() {

}

function abandon() {

}

function backup() {

}

function backupRestore() {

}

function backupVerify() {

}


function closed() {

}

function transactionsRoute() {

}



exports.channels = channels;
exports.abandon = abandon;
exports.backup = backup;
exports.backupRestore = backupRestore;
exports.backupVerify = backupVerify;
exports.closed = closed;
exports.pending = pending;
exports.transactions = transactions;
exports.transactionsRoute = transactionsRoute;
