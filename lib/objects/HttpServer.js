const http = require("http");
const url = require('url');
const logger = require("../utils/logger")

const channels = require("../rest/channels")
const operations = require("../rest/operations")
const graph = require("../rest/graph")
const invoices = require("../rest/invoices")
const peers = require("../rest/peers")
const utils = require("../rest/utils")



class HttpServer {
  constructor(listen_port) {
    this.listen_port = listen_port;
    this.server = http.createServer();
  }

  async listen() {
    this.server.on('request', (req, res) => {
      logger.info(req.method + " " + url.parse(req.url).pathname)
      try {
        let handles = this._setHandler()
        this._router(handles, url.parse(req.url).pathname, req, res)
      } catch (e) {
        logger.error(req.method + " " + req.url + ":" + e.message)
      }

      res.writeHead(200, {"Content-Type": "text-plain"})
      res.end();
    })
    this.server.listen(this.listen_port)
    logger.info(`HTTP Server running on port 127.0.0.1:${this.listen_port}`);
  }

  _router(handle, pathname, req, res) {
    if ( typeof handle[pathname] === 'function' ) {
      handle[pathname] (req, res)
    } else {
      logger.error("No request handler found for " + pathname)
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write("404 Not found");
      res.end();
    }
  }

  _setHandler() {
    let handle = {}
    handle["/v1/balance/blockchain"]      = utils.inpreparation;
    handle["/v1/balance/channels"]        = utils.inpreparation;
    handle["/v1/changepassword"]          = utils.inpreparation;
    handle["/v1/channels"]                = channels.channels;
    handle["/v1/channels/abandon"]        = channels.abandon;
    handle["/v1/channels/backup"]         = channels.backup;
    handle["/v1/channels/backup/restore"] = channels.backupRestore;
    handle["/v1/channels/backup/verify"]  = channels.backupVerify;
    handle["/v1/channels/closed"]         = channels.closed;
    handle["/v1/channels/pending"]        = channels.pending;
    handle["/v1/channels/transactions"]   = channels.transactions;
    handle["/v1/channels/transactions/route"] = channels.transactionsRoute;
    handle["/v1/chanpolicy"]              = utils.inpreparation;
    handle["/v1/fees"]                    = utils.inpreparation;
    handle["/v1/genseed"]                 = utils.inpreparation;
    handle["/v1/getinfo"]                 = operations.getinfo;
    handle["/v1/graph"]                   = graph.graph; 
    handle["/v1/graph/edge"]              = graph.edge;
    handle["/v1/graph/info"]              = graph.info;
    handle["/v1/graph/node"]              = graph.node;
    handle["/v1/graph/nodemetrics"]       = graph.nodemetrics;
    handle["/v1/graph/routes"]            = graph.routes;
    handle["/v1/initwallet"]              = utils.inpreparation;
    handle["/v1/invoice"]                 = invoices.invoice;
    handle["/v1/invoices"]                = invoices.invoices;
    handle["/v1/invoices/subscribe"]      = invoices.subscribe;
    handle["/v1/macaroon"]                = utils.inpreparation;
    handle["/v1/newaddress"]              = utils.inpreparation;
    handle["/v1/payments"]                = utils.inpreparation;
    handle["/v1/payments"]                = utils.inpreparation;
    handle["/v1/peers"]                   = peers.listpeers;
    handle["/v1/signmessage"]             = utils.inpreparation;
    handle["/v1/switch"]                  = utils.inpreparation;  
    handle["/v1/transactions"]            = utils.inpreparation;
    handle["/v1/transactions/fee"]        = utils.inpreparation;
    handle["/v1/unlockwallet"]            = utils.inpreparation;
    handle["/v1/utxos"]                   = utils.inpreparation;
    handle["/v1/verifymessage"]           = utils.inpreparation;

    return handle;
  }
}

module.exports = HttpServer;