

class LnNode {
  constructor(
    name, 
    balance, 
    publicKey, 
    privateKey, 
    iditity_pubkey, 
    address, 
    peers, 
    channels,
  ) {
    this.balance = balance;
    this.publicKey = publicKey;
    this.privateKey = privateKey;
    this.iditity_pubkey = iditity_pubkey;
    this.address = address;
    this.name = name;
    this.peers = peers;
    this.channels = channels;
    this.invoices = []
  }

  init (network) {
    // let privateKey = new bitcore.PrivateKey(network);
    // this.iditity_pubkey = privateKey.toPublicKey();
    // this.address =  publicKey.toAddress(network);
  }

  start () {
    // port open
    
  }

  stop() { 

  }

  addPeer(address) {
    this.peers.push(address);

    let transaction;
    return transaction;
  }

  addChannel(address) {
    this.channels.push(address);

    let transaction;
    return transaction
  }
  
  addInvoice() {

  }
}

module.exports = LnNode;