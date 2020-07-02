const ChannelCtr = require('../../controllers/channel')
const channelResSchemas = require('../responseSchemas/channels')

async function channels(req, res) {
  if (req.method === "POST") {
    let channels = await ChannelCtr.getChannels()
    let body = JSON.stringify(channelResSchemas.new(), undefined, 4);
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();
  }
  if (req.method === "GET") {
    let channels = await ChannelCtr.getAll(req.options);
    let body = JSON.stringify(channelResSchemas.getChannels(channels), undefined, 4);
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();
  }
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


function pending() {

}


function transactions() {

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
