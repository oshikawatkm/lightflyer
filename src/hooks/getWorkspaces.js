import { useEffect, useState } from 'react'
import Channels from '../../shared/channels'

const { ipcRenderer } = window
const { 
  getWorkspaces, 
  getWorkspacesResponse,
} = Channels

const useGetWorkspaces = () => {
  const [workspaces, setWSs] = useState([]);

  useEffect(() => {
    ipcRenderer.send(getWorkspaces, 'ping')
    ipcRenderer.on(getWorkspacesResponse, (e, res) => {
      let workspacesArr = []
      for (let i=0; i <= Object.keys(res).length -1; i++) {
        workspacesArr.push(res[i]._doc.name)
      }
      setWSs(workspacesArr);
    })
  },[])


  return [workspaces];
}

export default useGetWorkspaces;