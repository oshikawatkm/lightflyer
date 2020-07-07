const App = require("../src/lib/index")
const PeerCtr = require('../src/lib/controllers/peer');
const ChannelCtr = require('../src/lib/controllers/channel');
const WorkspaceCtr = require('../src/lib/controllers/workspace');
const InvoiceCtr = require('../src/lib/controllers/invoice');
const LNnodeCtr = require('../src/lib/controllers/lnnode')

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
  addr: "03d9b60c4a8a2f06263633241c695486621aaba5a15230840eaafe531ddd6b5cd6@192.168.0.0"
}

const channelOptions = { 
  node_pubkey: "03176f0ddf4be5862e92bd03b7213e227a1164d3369804ec2230a5c0555ca26d30",
  node_pubkey_string: "03176f0ddf4be5862e92bd03b7213e227a1164d3369804ec2230a5c0555ca26d30",
  capacity: "1000000",
  local_funding_amount: "1000000",
  remote_balance: "0",
  push_sat: "1000000",
  private:   false
}

const invoieOptions = {
    memo: "test",
    value: "10000",
    settled: true,
}

const payment_options = {
  payment_request: "lnml9tai6tivuwm4r3aukew5mwjs9qj3gfrnksdr8bp01c5kpkdiik2nvqk55b0zgsweaa4u1fl27zinhcmhfzzx6mk8dsxvd8u8o36n0jacfey4pa2j9udn4i3jvlgo3rlsaqjbkcgl4qruh5tl1ju2l1uc4esy6kd1lpfiunry76g83is507mabqjwujzgea0c7zywugbd14a7gzxs5ccauzextq6w1e8ane4q1waboki90oquvdyqvlz"
}

const close_point = "02cl2k5j3c1n6mam67vki9mhck98n450v31ha5oated9xfojn9onodyulk3k2b1a:0"

async function init_start() {
  await App.init()
  // await App.new(config)
  await App.start(config.workspaceName)
  let wsId = await WorkspaceCtr.init(config.workspaceName)
  //await PeerCtr.addPeerFromSelf(peerOptions)
  // await ChannelCtr.addChannelFromSelf(channelOptions);
  //await InvoiceCtr.addInvoiceFromSelf(invoieOptions)
  // await LNnodeCtr.payment(payment_options)
  // await ChannelCtr.close(close_point)
}

init_start()