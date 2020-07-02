const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PeersSchema = require('./Peer');
const ChannelsSchema = require('./Channel');
const InvoicesSchema = require('./Invoice');

const LNnodeSchema = new Schema({
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
    required: true
  },
  peers: {
    type: Schema.Types.ObjectId,
    ref: 'PeersSchema',
    default: []
  },
  channels: {
    type: Schema.Types.ObjectId,
    ref: 'ChannelsSchema',
    default: []
  },
  invoices: {
    type: Schema.Types.ObjectId,
    ref: 'InvoicesSchema',
    default: []
  },
})

mongoose.model('lnnodes', LNnodeSchema);