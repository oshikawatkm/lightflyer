import { useEffect, useState } from 'react'
import Channels from '../../shared/channels'

const { ipcRenderer } = window
const { 
  getInvoices, 
  getInvoicesResponse,
} = Channels

const useGetInvoices = (status) => {
  const [invoices, setInvoice] = useState([]);

  useEffect(() => {
    setInterval(()=>{
      ipcRenderer.send(getInvoices, "ping")
    }, 3000)
    ipcRenderer.on(getInvoicesResponse, (e, response) => {
      let invoiceArr = []
      for (let i=0; i <= Object.keys(response).length -1; i++) {
        invoiceArr.push(response[i]._doc)
      }
  
      setInvoice(invoiceArr);
    })
  },[status])


  return [invoices];
}

export default useGetInvoices;