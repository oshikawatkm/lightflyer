const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LNnodeSchema = require('./LNnode');

const WorkspaceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  server_config: {
    rpc_listen_port: {
      type: Number,
      required: true,
      default: 10001
    },
    rest_listen_port: {
      type: Number,
      required: true,
      default: 10011
    }
  },
  blockchain_config: {
    daemon: {
      type: String,
      required: true,
      default: "btcd"
    },
    network: {
      type: String,
      required: true,
      default: "mainnet"
    },
    automine: {
      type: Boolean,
      required: true,
      default: true
    },
    minepace: {
      type: Number,
      required: true,
      default: 10
    }
  },
  ln_config: {
    daemon: {
      type: String,
      required: true,
      default: "lnd"
    },
    version: {
      type: String,
      required: true,
      default: "0.10.99-beta commit=clock/v1.0.0-47-gd47d17b5d48ce6d24f70ad5b833052cd3d0011df"
    },
  },
  nodes: {
    type: [LNnodeSchema],
    default:[],
    required: true
  }
})

mongoose.model('workspaces', WorkspaceSchema);