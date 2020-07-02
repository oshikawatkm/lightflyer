const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeersSchema = new Schema({
  pub_key: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  bytes_sent: {
    type: String,
    required: true,
    default: "7",
  },
  bytes_recv: {
    type: String,
    required: true,
    default: "7",
  },
  sat_sent: {
    type: String,
    required: true,
    default: "0",
  },
  sat_recv: {
    type: String,
    required: true,
    default: "0",
  },
  inbound: {
    type: Boolean,
    required: true,
    default: false,
  },
  ping_time: {
    type: String,
    required: true,
    default: "0",
  }
})

mongoose.model('peers', PeersSchema);