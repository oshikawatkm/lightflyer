const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/Workspace');
const Workspace = mongoose.model('workspaces');



const db = require('../../cfg/db')

const WorkspaceController = (() => {
  return {
    init: (config, nodes) => {
      new Workspace({
        name: config.workspaceName,
        server_config: {
          rpc_listen_port: config.rpcport,
          rest_listen_port: config.restport,
        },
        blockchain_config: {
          minepace: config.minepace,
        },
        nodes: nodes
      })
      .save()
      .then(() => logger.info("Success Saving Workspace Config!"))
      .catch(err => logger.error(err))
    },
    getAll: () => {
      let workspaces = Workspace.find();
      return workspaces;
    },
    get: async (workspaceName) => {
      workspaceName = "test-ws";
      let ws = await Workspace.find({name: workspaceName})
        .then(res => {
          return res
        })
      return ws
    },
    destroy: () => {
      
    }
  }
})()

module.exports = WorkspaceController;
