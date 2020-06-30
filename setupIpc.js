const { ipcMain } = require('electron')
const Channels = require('./shared/channels')
const App = require('./src/lib/index.js')
const WorkspaceCtr = require('./src/lib/controllers/workspace.js')

const { 
  initApp, 
  startApp,
  getWorkspace,
  getWorkspaceResponse,
  getWorkspaces,
  getWorkspacesResponse
} = Channels

module.exports = function setupIpc() {
  ipcMain.on(initApp, (event,config) => {
    App.init(config);
  })
  
  ipcMain.on(startApp, (event,config) => {
    App.start(config);
  })
  
  ipcMain.on(getWorkspace, async (event, workspaceName) => {
    let workspace = await WorkspaceCtr.get(workspaceName);
    event.reply(getWorkspaceResponse, workspace)
  })
  
  ipcMain.on(getWorkspaces, async (event) => {
    let workspaces = await WorkspaceCtr.getAll();
    console.log(workspaces)
    event.reply(getWorkspacesResponse, workspaces)
  })
}