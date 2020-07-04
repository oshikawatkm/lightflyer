const mongoose = require('mongoose');
// const bitcoinjs = require('bitcoinjs-lib');
const db = require('../cfg/db')

mongoose.Promise = global.Promise;

mongoose.connect(db.mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



require('../src/lib/models/Workspace')
const Workspace = mongoose.model('workspaces');

// let keyPair = bitcoinjs.ECPair.makeRandom();
// let privateKey = keyPair.toWIF();
// let publicKey = keyPair.publicKey.toString('hex');


// const newWorkspace = {
//   name: "test-ws2",
//   nodes: []
// }




// const newLNnode = {
//   name: "test",
//   publicKey: publicKey,
//   privateKey: privateKey,
//   iditity_pubkey: "hogehoge",
//   address: "192.168.0.0",
//   peers: [],
//   channels: [],
//   invoices: []
// }

// newWorkspace.nodes.push(newLNnode)

// new Workspace(newWorkspace)
//   .save()
//   .then(() => console.log("success!!"))

  Workspace.find().then((ws) => console.log(ws))