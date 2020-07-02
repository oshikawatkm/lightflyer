import { useEffect, useState } from 'react'
import Channels from '../../shared/channels'

const { ipcRenderer } = window
const { 
  getWorkspace, 
  getWorkspaceResponse,
} = Channels

const useGetWorkspace = () => {
  const [workspaceName, setWSName] = useState("");
  const [rpcPort, setRpcPort] = useState(0);
  const [restPort, setRestPort] = useState(0);
  const [blockchainDaemon, setBCDaemon] = useState("");
  const [bitcoinNetwork, setBTCNetwork]= useState("");
  const [lnDaemon, setLND] = useState("");

  useEffect(() => {
    ipcRenderer.send(getWorkspace, 'test-ws')
    ipcRenderer.on(getWorkspaceResponse, (e, workspace) => {
      const workspaceName = workspace[0]._doc.name;
      const rpcPort = workspace[0]._doc.server_config.rpc_listen_port;
      const restPort =  workspace[0]._doc.server_config.rest_listen_port;
      const blockchainDaemon = workspace[0]._doc.blockchain_config.daemon;
      const bitcoinNetwork = workspace[0]._doc.blockchain_config.network;
      const lnDaemon = workspace[0]._doc.ln_config.daemon;

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