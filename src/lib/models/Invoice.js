const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HtlcSchema = new Schema({
  chan_id: {
    type: Number,
    required: true,
  },
  htlc_index: {
    type: Number,
    required: true,
  },
  amt_msat: {
    type: Number,
    required: true,
  },
  accept_height: {
    type: Number,
    required: true,
  },
  accept_time: {
    type: String,
    required: true,
  },
  resolve_time: {
    type: String,
    required: true,
  },
  expiry_height: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
    default: "SETTLED"
  },
  custom_records: {
    type: String,
  },
  mpp_total_amt_msat: {
    type: Number,
    required: true,
  },
})

const InvoiceSchema = new Schema({
  lnnode: {
    type: Schema.Types.ObjectId,
    ref: 'lnnodes'
  },
  memo: {
    type: String,
    required: true,
    default: ""
  },
  r_preimage:{
    type: String,
    required: true,
  },
  r_hash: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  value_msat:  {
    type: Number,
    required: true,
  },
  settled: {
    type: Boolean,
    required: true,
    default: false
  },
  creation_date: {
    type: String,
    required: true,
  },
  settle_date: {
    type: String,
    required: true,
  },
  payment_request: {
    type: String,
    required: true,
  },
  description_hash: {
    type: String,
    required: true,
    default: null
  },
  expiry: {
    type: Number,
    required: true,
    default: 3600
  },
  fallback_addr:  {
    type: String,
    required: true,
    default: ""
  },
  cltv_expiry: {
    type: Number,
    required: true,
    default: 40
  },
  route_hints: {
    type: [String],
    required: true,
  },
  private: {
    type: Boolean,
    required: true,
    default: false
  },
  add_index: {
    type: Number,
    required: true,
    default: 1
  },
  settle_index: {
    type: Number,
    required: true,
    default: 1
  },
  amt_paid: {
    type: Number,
    required: true,
    default: 0
  },
  amt_paid_sat: {
    type: Number,
    required: true,
    default: 0
  },
  amt_paid_msat: {
    type: Number,
    required: true,
    default: 0
  },
  state:  {
    type: String,
    required: true,
    default: "SETTLED"
  },
  htlcs: {
    type: [HtlcSchema],
    required: true,
  },
  features: {
    type: [],
    required: true,
  },
  is_keysend: {
    type: Boolean,
    required: true,
    default: false
  },
})

mongoose.model('invoices', InvoiceSchema);