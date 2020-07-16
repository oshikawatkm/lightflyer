const logger = require('../utils/logger');
const WorkspaceServices = require('../services/workspace');
const LNnodeServices  = require('../services/lnnode');

const WorkspaceController = (() => {
  return {
    init: (wsname) => {
      return WorkspaceServices.findId(wsname)
    },
    new: async (config) => {
      let wsId = await WorkspaceServices.create(config);
      for (i = 0; i <= config.nodeNumber - 1 ;i++) {
        await LNnodeServices.create(wsId, config, i);
      }
    },
    getAll: async () => {
      return await WorkspaceServices.find();
    },
    get: async (workspaceName) => {
      return await WorkspaceServices.findOne(workspaceName);
    },
    save: async (workspaceName) => {
      await WorkspaceServices.update(config, nodes);
    },
    destroy: () => {
      
    },
  }
})()

module.exports = WorkspaceController;
