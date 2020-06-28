const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  remote_pubkey: {
    type: String,
    required: true,
  },
  channel_point: {
    type: String,
    required: true,
  },
  chan_id: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  local_balance: {
    type: Number,
    required: true,
  },
  remote_balance: {
    type: Number,
    required: true,
  },
  commit_fee:  {
    type: Number,
    required: true,
    default: 8000
  },
  commit_weight: {
    type: Number,
    required: true,
    default: 0
  },
  fee_per_kw:  {
    type: Number,
    required: true,
    default: 0
  },
  unsettled_balance:  {
    type: Number,
    required: true, 
    default: 0
  },
  total_satoshis_sent:  {
    type: Number,
    required: true,
    default: 0
  },
  total_satoshis_received:  {
    type: Number,
    required: true,
    default: 0
  },
  num_updates:  {
    type: Number,
    required: true,
    default: 0
  },
  pending_htlcs:  {
    type: [String],
  },
  csv_delay: {
    type: Number,
    required: true,
    default: 0
  },
  private: {
    type: Boolean,
    required: true,
    default: false
  },
})

mongoose.model('channels', ChannelSchema);