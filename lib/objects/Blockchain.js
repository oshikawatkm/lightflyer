

class Blockchain {
  constructor(network, autmine, miningPace) {
    this.network    = network;
    this.automine   = autmine;
    this.miningPace = miningPace;
    this.transactions = [];
    this.nodes = []
  }

  registerNode(node) {
    this.nodes.push(node)
  }

  mining() {

  }


}

module.exports = Blockchain;