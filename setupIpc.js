const { ipcMain } = require('electron')
const Channels = require('./shared/channels')
const App = require('./src/lib/index')
const WorkspaceCtr = require('./src/lib/controllers/workspace');
const ReqHistoryCtr = require('./src/lib/controllers/reqhistory');
const LNnodeCtr = require('./src/lib/controllers/lnnode')
const InvoiceCtr = require('./src/lib/controllers/invoice')

const { 
  initApp, 
  startApp,
  startAppResponse,
  newWorkspace,
  getWorkspace,
  getWorkspaceResponse,
  getWorkspaces,
  getWorkspacesResponse,
  getReqHistorys,
  getReqHistorysResponse,
  getInvoices,
  getInvoicesResponse,
  getLNnodes,
  getLNnodesResponse,
} = Channels

module.exports = function setupIpc() {
  ipcMain.on(initApp, (event,config) => {
    App.init(config);
  })
  
  ipcMain.on(startApp, (event,config) => {
    App.start(config);
    event.reply(startAppResponse, true)
  })
  
  ipcMain.on(newWorkspace, (event, formData) => {
    WorkspaceCtr.new(formData);
  })

  ipcMain.on(getWorkspace, async (event, wsname) => {
    let workspace = await WorkspaceCtr.get(wsname);
    event.reply(getWorkspaceResponse, workspace)
  })
  
  ipcMain.on(getWorkspaces, async (event) => {
    let workspaces = await WorkspaceCtr.getAll();
    event.reply(getWorkspacesResponse, workspaces)
  })

  ipcMain.on(getReqHistorys, async (event) => {
    let reqHistorys = await ReqHistoryCtr.getAll();
    event.reply(getReqHistorysResponse, reqHistorys)
  })

  ipcMain.on(getInvoices, async (event) => {
    let invoices = await InvoiceCtr.getAllInWs();
    event.reply(getInvoicesResponse, invoices)
  })

  ipcMain.on(getLNnodes, async (event) => {
    let lnnodes = await LNnodeCtr.getAll();
    console.log(lnnodes)
    event.reply(getLNnodesResponse, lnnodes)
  })

}