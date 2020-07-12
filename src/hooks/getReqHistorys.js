import { useEffect, useState } from 'react'
import Channels from '../../shared/channels'

const { ipcRenderer } = window
const { 
  getReqHistorys, 
  getReqHistorysResponse,
} = Channels;

const useGetReqHistorys = (status) => {
  const [reqHistorys, setReqHistorys] = useState([]);

  useEffect((status) => {
    ipcRenderer.send(getReqHistorys, "ping")
    ipcRenderer.on(getReqHistorysResponse, (e, reqhistorys) => {
      let reqHistoryArr = []
      for (let i=0; i <= Object.keys(reqhistorys).length -1; i++) {
        reqHistoryArr.push(reqhistorys[i]._doc)
      }
      setReqHistorys(reqHistoryArr);
    })
  }, [status])

  return [reqHistorys];
}

export default useGetReqHistorys;