const PeerCtr = require('../../controllers/peer')
const channelResSchemas = require('../responseSchemas/peers')


async function listpeers(req, res) {
  if (req.method === "POST") {
    try {
      await PeerCtr.new()
      let body = JSON.stringify(channelResSchemas.new(), undefined, 4);
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(body);
      res.end();
    } catch(err) {
      res.writeHead(500, {"Content-Type": "text/html"});
      res.write(body);
      res.end();
    }
  }
  if (req.method === "GET") {
    let peers = await PeerCtr.getAll(req.options);
    let body = JSON.stringify(channelResSchemas.getChannels(peers), undefined, 4);
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();
  }
}

exports.listpeers = listpeers;