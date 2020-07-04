const App = require("../src/lib/index")


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

async function init_start() {
  await App.init()
  // await App.new(config)
  await App.start(config.workspaceName)
}

init_start()