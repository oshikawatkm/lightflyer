import { useEffect } from 'react'
import Channels from '../../shared/channels'

const { ipcRenderer } = window
const {
  newWorkspace
} = Channels

const useNewWorkspace= (formData) => {

  ipcRenderer.send(newWorkspace, formData)

}

export default useNewWorkspace;