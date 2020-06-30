

function channels(req, res) {
  if (req.method === "POST") {
    
  }
  if (req.method === "GET") {
    var body = `
    {
      "channels": [
          {
              "active": true,
              "remote_pubkey": "BOB_PUBKEY",
              "channel_point": "2622b779a8acca471a738b0796cd62e4457b79b33265cbfa687aadccc329023a:0",
              "chan_id": "495879744192512",
              "capacity": "1000000",
              "local_balance": "991312",
              "remote_balance": "0",
              "commit_fee": "8688",
              "commit_weight": "600",
              "fee_per_kw": "12000",
              "unsettled_balance": "0",
              "total_satoshis_sent": "0",
              "total_satoshis_received": "0",
              "num_updates": "0",
              "pending_htlcs": [
              ],
              "csv_delay": 144,
              "private": false
          }
      ]
    }
    `
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
