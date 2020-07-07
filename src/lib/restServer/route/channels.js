const ChannelCtr = require('../../controllers/channel')
const channelResSchemas = require('../responseSchemas/channels')
const invoiceResSchemas = require('../responseSchemas/invoices');

const logger = require('../../utils/logger');


async function channels(req, res, server) {
  if (req.method === "POST") {
    try {
      let data = await server.getbody();
      console.log(data)
      let result = await ChannelCtr.addChannelFromSelf(req.options)
      let body = JSON.stringify(channelResSchemas.new(result), undefined, 4);
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write(body);
      res.end();
    } catch(err) {
      logger.error(err)
      res.writeHead(500, {"Content-Type": "application/json"});
      res.write(err);
      res.end();
    }
  } else if (req.method === "GET") {
    try {
      let result = await ChannelCtr.getAll(req.options);
      let body =  JSON.stringify(await channelResSchemas.getChannels(result), undefined, 4);
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write(body);
      res.end();
    } catch(err) {
      logger.error(err)
      awaitres.writeHead(500, {"Content-Type": "application/json"});
      res.write(err);
      res.end();
    }
  } else {
    res.writeHead(400, {"Content-Type": "application/json"});
    res.write(undefined);
    res.end();
  }
}

async function transactions() {
  if (req.method === "POST") {
    try {
      let result = await ChannelCtr.payment(req.options)
      let body = JSON.stringify(invoiceResSchemas.payment(result), undefined, 4);
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write(body);
      res.end();
    } catch(err) {
      res.writeHead(500, {"Content-Type": "application/json"});
      res.write(body);
      res.end();
    }
  } else {
    res.writeHead(400, {"Content-Type": "application/json"});
    res.write(undefined);
    res.end();
  }
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
