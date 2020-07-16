const LNnodeCtr = require('../../controllers/lnnode')

async function getinfo(req, res, data, server) {
  let jsondata = JSON.parse(data);
  if (req.method === "GET") {
    try {
      let result = await LNnodeCtr.get(jsondata);
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
  } else {
    res.writeHead(400, {"Content-Type": "application/json"});
    res.write(undefined);
    res.end();
  }
  server.data = ""
}


async function payment(req, res, data, server) {
  let jsondata = JSON.parse(data);
  if (req.method === "POST") {
    try {
      let result = await LNnodeCtr.get(jsondata);
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
  } else {
    res.writeHead(400, {"Content-Type": "application/json"});
    res.write(undefined);
    res.end();
  }
  server.data = ""
}


exports.getinfo = getinfo;
exports.payment = payment;