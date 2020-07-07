function getinfo(req, res) {
  let body = `
  {
    “version”: “0.10.99-beta commit=clock/v1.0.0-47-gd47d17b5d48ce6d24f70ad5b833052cd3d0011df”,
    “commit_hash”: “d47d17b5d48ce6d24f70ad5b833052cd3d0011df”,
    “identity_pubkey”: “03ce506bf5eeac7de779d7254ca69ff5bba42ef902c7d14c5d2dac8d95d39c4c8b”,
    “alias”: “03ce506bf5eeac7de779",
    “color”: “#3399FF”,
    “num_pending_channels”: 0,
    “num_active_channels”: 0,
    “num_inactive_channels”: 0,
    “num_peers”: 0,
    “block_height”: 205639,
    “block_hash”: “000000002d9f5133710b2014175aad80621499558922eca187a41b49fada9feb”,
    “best_header_timestamp”: “1296688602”,
    “synced_to_chain”: false,
    “synced_to_graph”: false,
    “testnet”: true,
    “chains”: [
      {
        “chain”: “bitcoin”,
        “network”: “testnet”
      }
    ],
    “uris”: [
    ],
    “features”: {
      “0": {
        “name”: “data-loss-protect”,
        “is_required”: true,
        “is_known”: true
      },
      “5”: {
        “name”: “upfront-shutdown-script”,
        “is_required”: false,
        “is_known”: true
      },
      “7": {
        “name”: “gossip-queries”,
        “is_required”: false,
        “is_known”: true
      },
      “9”: {
        “name”: “tlv-onion”,
        “is_required”: false,
        “is_known”: true
      },
      “13": {
        “name”: “static-remote-key”,
        “is_required”: false,
        “is_known”: true
      },
      “15”: {
        “name”: “payment-addr”,
        “is_required”: false,
        “is_known”: true
      },
      “17": {
        “name”: “multi-path-payments”,
        “is_required”: false,
        “is_known”: true
      }
    }
  }
  `;

  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(body);
  res.end();
}

exports.getinfo = getinfo;