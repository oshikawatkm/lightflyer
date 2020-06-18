const http = require("http");
const router = require('router');
const logger = require("../utils/logger")

class HttpServer {
  constructor(listen_port) {
    this.listen_port = listen_port;
    this.server = http.createServer();
    this.router = router();
  }

  async listen() {
    this.server.on('request', (req, res) => {
      logger.info(req.method + " " + req.url)

      // remove api version from request (ex. /v1/channels -> channels)
      let restRequest = req.url.slice(4)
      try {
        this._restHandler(restRequest)
      } catch (e) {
        logger.error(req.method + " " + req.url + ":" + e.message)
      }

      res.writeHead(200, {"Content-Type": "text-plain"})
      
    })
    this.server.listen(this.listen_port)
    // console.log(this.rest_url)
    // http.get(this.rest_url, (res) => {
    //   let body = '';
    //   res.setEncoding('utf8');

    //   res.on('data', (chunk) => {
    //       body += chunk;
    //   });
    //   res.on()
    // })
    // .on('error', (e) => {
    //   console.log(e.message); //エラー時
    // });
    logger.info(`HTTP Server running on port 127.0.0.1:${this.listen_port}`);
  }

  async _restHandler(request) {
    console.log(request)
    if (request.indexOf("channels") == 0) {
      console.log("Channels!")
    } else if (request.indexOf("fees") == 0) {
      console.log("Fees!")
    } else if (request.indexOf("invoices") == 0) {
      console.log("invoice!")
    } else {
      throw new Error("Request Not Found")
    }
  }
}

module.exports = HttpServer;