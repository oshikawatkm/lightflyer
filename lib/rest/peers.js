


function listpeers(req, res) {
  if (req.method === "POST") {
    let postData = '';
    req.on("data", (chunk) => {
      postData += chunk;
    }).on('end', () => {
      console.log(NodeManager)
      //NodeManager.addPeer("o0ro4ioioeikdksbvr", JSON.parse(postData).addr)
  })
  }
  if (req.method === "GET") {
    var body = `
    "peers": [
        {
            "pub_key": "vq3erg43qnvbqeor343rjvavinqino4",
            "address": "127.0.0.1:10012",
            "bytes_sent": "7",
            "bytes_recv": "7",
            "sat_sent": "0",
            "sat_recv": "0",
            "inbound": false,
            "ping_time": "0"
        }
      ]
    }
    `;

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(body);
    res.end();
  }
}

exports.listpeers = listpeers;