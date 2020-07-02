const logger = require('../utils/logger');
const mongoose = require('mongoose');
require ('../models/Workspace');
const Workspace = mongoose.model('workspaces');



const db = require('../../../cfg/db')

const WorkspaceService = (() => {
  return {
    create: (config, nodes) => {
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
    find: async () => {
      mongoose.Promise = global.Promise;
      mongoose.connect(db.mongoURI)
        .then(() => logger.info('MongoDB Connected...'))
        .catch(err => logger.error(err))

      let workspaces = await Workspace.find()
        .then(res => {
          return res
        });

      return workspaces;
    },
    findOne: async (workspaceName) => {
      let ws = await Workspace.findOne({name: workspaceName})
        .then(res => {
          return res
        })
      console.log(ws)
      return ws
    },
    update: () => {

    },
    delete: () => {
      
    }
  }
})()

module.exports = WorkspaceService;
