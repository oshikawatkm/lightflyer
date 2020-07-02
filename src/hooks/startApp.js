import { useEffect } from 'react'
import Channels from '../../shared/channels'

const { ipcRenderer } = window
const {
  startApp
} = Channels

const useStartApp = () => {

  useEffect(() => {
    ipcRenderer.send(startApp, 'test-ws')
  },[])

}

export default useStartApp;