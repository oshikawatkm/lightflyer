import { useEffect } from 'react'
import Channels from '../../shared/channels'

const { ipcRenderer } = window
const {
  initApp
} = Channels

const useInitApp = () => {

  useEffect(() => {
    ipcRenderer.send(initApp, 'ping')
  },[])

}

export default useInitApp;