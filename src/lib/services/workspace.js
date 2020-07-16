const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/Workspace');
const Workspace = mongoose.model('workspaces');


const db = require('../../../cfg/db')

const WorkspaceServices = (() => {
  return {
    create:async (config) => {
      let wsId = await new Workspace({
        name: config.workspaceName,
        server_config: {
          rpc_listen_port: config.rpcport,
          rest_listen_port: config.restport,
        },
        blockchain_config: {
          daemon: config.daemon ? config.daemon : "btcd",
          network: config.network ? config.network : "mainnet",
          automine: config.automine ? config.automine : true,
          minepace: config.minepace ? config.minepace : "10",
          fee: config.fee ? config.fee : 8000,
        },
        ln_config: {
          daemon: config.daemon ? config.daemon : "lnd",
          version: config.daemon ? config.daemon : "0.10.99-beta commit=clock/v1.0.0-47-gd47d17b5d48ce6d24f70ad5b833052cd3d0011df",
        }
      })
      .save()
      .then(ws => {
        logger.info("Success Saving Workspace Config!");
        return ws._id;
      })
      .catch(err => logger.error(err))
      return wsId;
    },
    find: async () => {
      let workspaces =  await Workspace.find()
        .then(res => {
          return res
        });

      return workspaces;
    },
    findOne: async (wsname) => {
      let ws = await Workspace.findOne({name: wsname})
        .then(res => {
          return res
        })
      return ws
    },
    update: () => {

    },
    delete: () => {
      
    },
    findId: async (wsname) => {
      let wsId = await Workspace.findOne({name: wsname}, {$set: "_id"})
        .then((res) => {
          return res;
        })
      return wsId._id;
    },
  }
})()

module.exports = WorkspaceServices;
