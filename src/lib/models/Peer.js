const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeersSchema = new Schema({
  lnnode: {
    type: Schema.Types.ObjectId,
    ref: 'lnnodes'
  },
  pub_key: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  bytes_sent: {
    type: Number,
    required: true,
    default: 7,
  },
  bytes_recv: {
    type: Number,
    required: true,
    default: 7,
  },
  sat_sent: {
    type: Number,
    required: true,
    default: 0,
  },
  sat_recv: {
    type: Number,
    required: true,
    default: 0,
  },
  inbound: {
    type: Boolean,
    required: true,
    default: false,
  },
  ping_time: {
    type: Number,
    required: true,
    default: 0,
  }
})

mongoose.model('peers', PeersSchema);