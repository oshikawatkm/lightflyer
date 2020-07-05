const App = require("../src/lib/index")
const PeerCtr = require('../src/lib/controllers/peer');
const ChannelCtr = require('../src/lib/controllers/channel');
const WorkspaceCtr = require('../src/lib/controllers/workspace');


// Alice
// 032bde0216186cc8d3cc8f4942771caf4e323c1dc25f52be7b9c2f6793c6832837

const config = {
  workspaceName: 'test2',
  configFileDir: '/Users/oshikawa/.lightflyer',
  miningPace: 10,
  fee: 1,
  nodeNumber: 5,
  satoshi: 10000000000000,
  rpcport: 10001,
  restport: 8001,
  address: '',
  identify_pubkey: ''
}

const peerOptions = {
  addr: "032bde0216186cc8d3cc8f4942771caf4e323c1dc25f52be7b9c2f6793c6832837@192.168.0.0"
}

const channelOptions = { 
  node_pubkey: "032bde0216186cc8d3cc8f4942771caf4e323c1dc25f52be7b9c2f6793c6832837",
  node_pubkey_string: "032bde0216186cc8d3cc8f4942771caf4e323c1dc25f52be7b9c2f6793c6832837",
  capacity: "1000000",
  local_funding_amount: "1000000",
  remote_balance: "0",
  push_sat: "1000000",
  private:   false
}

const invoieOptions = {
    memo: "string",
    receipt: "string",
    r_preimage: "string",
    r_hash: "string",
    value: "string",
    settled: true,
    creation_date: "string",
    settle_date: "string",
    payment_request: "string",
    description_hash: "string",
    expiry: "string",
    fallback_addr: "string",
    cltv_expiry: "string"
}

async function init_start() {
  await App.init()
  // await App.new(config)
  await App.start(config.workspaceName)
  let wsId = await WorkspaceCtr.init(config.workspaceName)
  await PeerCtr.init(wsId)
  // await PeerCtr.addPeerFromSelf(peerOptions)
  await ChannelCtr.init(wsId);
  await ChannelCtr.addChannelFromSelf(channelOptions);

}

init_start()