
class LnNode {
  constructor(name, balance, iditity_pubkey, address) {
    this.balance = balance;
    this.iditity_pubkey = iditity_pubkey;
    this.address = address;
    this.name = name;
    this.peers = [];
    this.channels = [];
  }

  init () {

  }

  start () {
    // port open
    
  }

  stop() { 

  }
}

module.exports = LnNode;