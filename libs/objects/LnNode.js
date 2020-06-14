

class LnNode {
  constructor(
    name, 
    balance, 
    publicKey, 
    privateKey, 
    iditity_pubkey, 
    address, 
    peers, 
    channels
  ) {
    this.balance = balance;
    this.publicKey = publicKey;
    this.privateKey = privateKey;
    this.iditity_pubkey = iditity_pubkey;
    this.address = address;
    this.name = name;
    this.peers = peers;
    this.channels = channels;
  }

  init (network) {
    let privateKey = new bitcore.PrivateKey(network);
    this.iditity_pubkey = privateKey.toPublicKey();
    this.address =  publicKey.toAddress(network);
  }

  start () {
    // port open
    
  }

  stop() { 

  }

  addPeer(node) {
    this.peers.push(node);

    let transaction;
    return transaction;
  }

  addChannel(node) {
    this.channels.push(node);

    let transaction;
    return transaction
  }
}

module.exports = LnNode;