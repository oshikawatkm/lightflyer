const http = require("http");
const logger = require("../utils/logger")

class HttpServer {
  constructor(listen_port) {
    this.listen_port = listen_port;
    this.server = http.createServer();
  }

  async listen() {
    this.server.on('request', (req, res) => {
      console.log(req)
      // res.writeHead(200, {"Content-Type": "text-plain"})
      
    })
    this.server.listen(this.listen_port)
    logger.info(`HttpServer running on port 127.0.0.1:${this.listen_port}`);
  }
}

module.exports = HttpServer;