import { useEffect,useState } from 'react'
import Channels from '../../shared/channels'

const { ipcRenderer } = window
const {
  startApp,
  startAppResponse
} = Channels

const useStartApp = (wsname) => {
  const [statue, setStatue] = useState(false);

  useEffect(() => {
    ipcRenderer.send(startApp, wsname)
    ipcRenderer.on(startAppResponse, (e, res) => {
      console.log(res)
      setStatue(res);
    })
  },[])
  
  return [statue]
}

export default useStartApp;