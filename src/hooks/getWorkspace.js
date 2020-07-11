import { useEffect, useState } from 'react'
import Channels from '../../shared/channels'

const { ipcRenderer } = window
const { 
  getWorkspace, 
  getWorkspaceResponse,
} = Channels

const useGetWorkspace = wsname => {
  const [workspaceName, setWSName] = useState("");
  const [rpcPort, setRpcPort] = useState(0);
  const [restPort, setRestPort] = useState(0);
  const [blockchainDaemon, setBCDaemon] = useState("");
  const [bitcoinNetwork, setBTCNetwork]= useState("");
  const [lnDaemon, setLND] = useState("");

  useEffect(() => {
    ipcRenderer.send(getWorkspace, wsname)
    ipcRenderer.on(getWorkspaceResponse, (e, workspace) => {
      const workspaceName = workspace._doc.name;
      const rpcPort = workspace._doc.server_config.rpc_listen_port;
      const restPort =  workspace._doc.server_config.rest_listen_port;
      const blockchainDaemon = workspace._doc.blockchain_config.daemon;
      const bitcoinNetwork = workspace._doc.blockchain_config.network;
      const lnDaemon = workspace._doc.ln_config.daemon;

      setWSName(workspaceName);
      setRpcPort(rpcPort);
      setRestPort(restPort);
      setBCDaemon(blockchainDaemon);
      setBTCNetwork(bitcoinNetwork);
      setLND(lnDaemon);
    },[])
  })


  return [workspaceName, rpcPort, restPort, blockchainDaemon, bitcoinNetwork, lnDaemon];
}

export default useGetWorkspace;