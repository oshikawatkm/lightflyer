import { useEffect, useState } from 'react'
import Channels from '../../shared/channels'

const { ipcRenderer } = window
const { 
  getLNnodes, 
  getLNnodesResponse,
} = Channels;

const useGetLNnodes = (status) => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    setTimeout(()=>{
    ipcRenderer.send(getLNnodes, "ping")
    }, 3000)
    ipcRenderer.on(getLNnodesResponse, (e, lnnodes) => {
      let lnnodeArr = []
      for (let i=0; i <= Object.keys(lnnodes).length -1; i++) {
        lnnodeArr.push(lnnodes[i]._doc)
      }
      setNodes(lnnodeArr);
    })
  },[status])

  return [nodes];
}

export default useGetLNnodes;