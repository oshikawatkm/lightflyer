const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    type: [String],
    default: []
  },
  channels: {
    type: [String],
    default: []
  },
  invoices: {
    type: [String],
    default: []
  },
})

mongoose.model('lnnodes', LNnodeSchema);