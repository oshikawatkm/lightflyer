const Workspace = require ('../models/Workspace');
const logger = require('../utils/logger');

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
  }
})()

module.exports = WorkspaceController;