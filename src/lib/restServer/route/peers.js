const PeerCtr = require('../../controllers/peer')
const peerResSchemas = require('../responseSchemas/peers');
const logger = require('../../utils/logger');


async function listpeers(req, res, data) {
  if (req.method === "POST") {
    try {
      console.log(data)
      let result = await PeerCtr.addPeerFromSelf(req.options)
      let body = JSON.stringify(channelResSchemas.new(result), undefined, 4);
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(body);
      res.end();
    } catch(err) {
      res.writeHead(500, {"Content-Type": "text/html"});
      res.write(err);
      res.end();
    }
  } else if (req.method === "GET") {
    try {
      let peers = await PeerCtr.getAll(req.options);
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
}

exports.listpeers = listpeers;