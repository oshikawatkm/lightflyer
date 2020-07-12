import { useEffect, useState } from 'react'
import Channels from '../../shared/channels'

const { ipcRenderer } = window
const { 
  getLNnodesWithCount, 
  getLNnodesWithCountResponse,
} = Channels;

const useGetLNnodesWithCount = (status) => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    setTimeout(()=>{
    ipcRenderer.send(getLNnodesWithCount, "ping")
    }, 2000)
    ipcRenderer.on(getLNnodesWithCountResponse, (e, lnnodes) => {
      let lnnodeArr = []
      for (let i=0; i <= Object.keys(lnnodes).length -1; i++) {
        lnnodeArr.push(lnnodes[i])
      }
      setNodes(lnnodeArr);
    })
  },[status])

  return [nodes];
}

export default useGetLNnodesWithCount;