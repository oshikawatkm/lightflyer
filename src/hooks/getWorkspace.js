import { useEffect, useState } from 'react'
import Channels from '../../shared/channels'

const { ipcRenderer } = window
const { 
  getWorkspace, 
  getWorkspaceResponse,
  startApp
} = Channels

const useGetWorkspace = () => {
  const [workspaceName, setWSName] = useState("");
  const [rpcPort, setRpcPort] = useState(0);
  const [restPort, setRestPort] = useState(0);

  useEffect(() => {
    ipcRenderer.send(getWorkspace, 'test-ws')
    ipcRenderer.send(startApp, 'test-ws')
    ipcRenderer.on(getWorkspaceResponse, (e, workspace) => {
      const workspaceName = workspace[0]._doc.name;
      const rpcPort = workspace[0]._doc.server_config.rpc_listen_port;
      const restPort =  workspace[0]._doc.server_config.rest_listen_port;

      setWSName(workspaceName);
      setRpcPort(rpcPort);
      setRestPort(restPort);
    })
  })


  return [workspaceName, rpcPort, restPort];
}

export default useGetWorkspace;