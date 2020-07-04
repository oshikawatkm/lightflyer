const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PeersSchema = require('./Peer');
const ChannelsSchema = require('./Channel');

const LNnodeSchema = new Schema({
  workspace: {
    type: Schema.Types.ObjectId,
    ref: 'workspaces'
  },
  name: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    default: 100000000,
    required: true
  },
  publicKey: {
    type: String,
    required: true
  },
  privateKey: {
    type: String,
    required: true
  },
  iditity_pubkey: {
    type: String,
    required: true
  },
  address: {
    type: String,
    default: "192.168.0.0",
  },
  peers: {
    type: Schema.Types.ObjectId,
    ref: 'PeersSchema',
  },
  channels: {
    type: Schema.Types.ObjectId,
    ref: 'ChannelsSchema',
  }
})

mongoose.model('lnnodes', LNnodeSchema);