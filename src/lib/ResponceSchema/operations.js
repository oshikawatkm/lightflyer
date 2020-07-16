function getinfo(info) {
  let infoRes = new Object();
  infoRes.version    = info.version;
  infoRes.commit_hash    = info.commit_hash;
  infoRes.identity_pubkey = info.identity_pubkey;
  infoRes.alias = info.alias
  infoRes.color = info.color
  infoRes.num_pending_channels = info.num_pending_channels
  infoRes.num_active_channels = info.num_active_channels
  infoRes.num_inactive_channels = info.num_inactive_channels
  infoRes.num_peers = info.num_peers
  infoRes.block_height = info.block_height
  infoRes.block_hash = info.block_hash
  infoRes.best_header_timestamp = info.best_header_timestamp
  infoRes.synced_to_chain = true
  infoRes.synced_to_graph = true
  infoRes.testnet = info.testnet
  infoRes.chains = [{
    chain: "bitcoin",
    network: info.chain_network
  }]
  infoRes.uris = []
  infoRes.featuers = {
    0: {
      name: "data-loss-protect",
      is_required: true,
      is_known: true
    },
    5: {
      name: "upfront-shutdown-script",
      is_required: false,
      is_known: true
    },
    7: {
      name: "gossip-queries",
      is_required: false,
      is_known: true
    },
    9: {
      name: "tlv-onion",
      is_required: false,
      is_known: true
    },
    13: {
      name: "static-remote-key",
      is_required: false,
      is_known: true
    },
    15: {
      name: "payment-addr",
      is_required: false,
      is_known: true
    },
    17: {
      name: "multi-path-payments",
      is_required: false,
      is_known: true
    }
  }
  return invoiceRes;
}
