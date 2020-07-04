const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InvoicesSchema = require('./Invoice');

const ChannelSchema = new Schema({
  lnnode: {
    type: Schema.Types.ObjectId,
    ref: 'lnnodes'
  },
  active: {         // このチャンネルはactiveかいなか
    type: Boolean,
    required: true,
    default: true
  },
  remote_pubkey: {  //相手のidetity_pubkey
    type: String,
    required: true,
  },
  channel_point: {  // funding transactionのアウトポイント(txid:index)
    type: String,
    required: true,
  },
  chan_id: {        // channelのuid。（最初３バイト:ブロックの高さ、次3バイト：ブロック内のindex、最後2バイト：チャンネルの出力index）
    type: Number,
    required: true,
  },
  capacity: {       // チャンネルで保有している資金の総額
    type: Number,
    required: true,
  },
  local_balance: {  // このチャネルにおけるこのノードの現在のbalance
    type: Number,
    required: true,
  },
  remote_balance: { // このチャネルにおける相手ノードの現在のbalance
    type: Number,
    required: true,
  },
  commit_fee:  {    // 現在の一連のコミットメント・トランザクションに対して支払われる手数料として計算された金額
    type: Number,
    required: true,
    default: 8000
  },
  commit_weight: {  // commitment_txの重み
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
  invoices: {
    type: Schema.Types.ObjectId,
    ref: 'InvoicesSchema',
    default: []
  },
})

mongoose.model('channels', ChannelSchema);