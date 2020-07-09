const PeerCtr = require('../../controllers/peer')
const ReqHistoryCtr = require('../../controllers/reqhistory')
const peerResSchemas = require('../responseSchemas/peers');
const url = require('url');
const logger = require('../../utils/logger');


async function listpeers(req, res, data, server) {
  let jsondata = JSON.parse(data);
  if (req.method === "POST") {
    try {
      let result = await PeerCtr.addPeerFromSelf(JSON.parse(data))
      //let body = JSON.stringify(channelResSchemas.new(result), undefined, 4);
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("{}");
      res.end();
      ReqHistoryCtr.newPeer(req.method + " " + url.parse(req.url).pathname, "You", jsondata.addr, "HTTP")
    } catch(err) {
      console.log(err)
      res.writeHead(500, {"Content-Type": "text/html"});
      res.write(err);
      res.end();
    }
  } else if (req.method === "GET") {
    try {
      let peers = await PeerCtr.getAll(JSON.parse(data));
      let body = JSON.stringify(peerResSchemas.getPeers(peers), undefined, 4);
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(body);
      res.end();
    } catch(err) {
      logger.error(err)
      res.writeHead(500, {"Content-Type": "text/html"});
      res.write(undefined);
      res.end();
    }
  } else {
    res.writeHead(400, {"Content-Type": "text/html"});
    res.write(undefined);
    res.end();
  }
  server.data = ""
}

exports.listpeers = listpeers;