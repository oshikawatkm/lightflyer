const logger = require('../utils/logger');
const WorkspaceServices = require('../services/workspace');


const WorkspaceController = (() => {
  return {
    init: (config, nodes) => {
      
    },
    new: async (config, nodes) => {
      await WorkspaceServices.create(config, nodes);
    },
    getAll: async () => {
      await WorkspaceServices.find(config, nodes);
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