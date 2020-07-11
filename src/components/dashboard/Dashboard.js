import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../layout/Footer';
import NodeFeed from './NodeFeed';
import InvoiceFeed from './InvoiceFeed';
import useGetWorkspace from '../../hooks/getWorkspace';
import useStartApp from '../../hooks/startApp';
import useGetReqHistorys from '../../hooks/getReqHistorys';
import useGetLNnodes from '../../hooks/getLNnodes';
import useGetInvoices from '../../hooks/getInvoices';

const Dashboard = (state) => {
  let nodeContent;
  let invoiceContent;
  const [
    workspaceName, 
    rpcPort, 
    restPort, 
    blockchainDaemon, 
    bitcoinNetwork, 
    lnDaemon
  ] = useGetWorkspace(state.match.params.ws)
  const [status] = useStartApp(state.match.params.ws)
  const [reqhistorys] = useGetReqHistorys(status)
  const [nodes] = useGetLNnodes(status)
  const [invoices] = useGetInvoices(status)

  if (nodes.length == 0) {
    nodeContent = <p class="text-center mt-3">取得中...</p>
  } else {
    nodeContent = <NodeFeed nodes={nodes} />
  }

  if (invoices.length == 0) {
    invoiceContent = <p class="text-center mt-3"> There are no invoices</p>
  } else {
    invoiceContent = <InvoiceFeed invoices={invoices} />
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-3">
              <Link to="/" className="btn btn-outline-warning mt-3" ><i className="fas fa-backspace"></i> Top</Link>
            </div>
            <div className="col-md-9">
              <h2 class="text-warning mt-3">{workspaceName}</h2>
            </div>
          </div>
          <div className="card mt-2">
            <div className="container">
              <h4 className="m-2">Network</h4>
              <div id="network" className="bg-secondary mb-3" style={{ width:410, height: 230}}>
              </div>
              <h5>Environment</h5>
              <div className="row">
                <div className="col-md-3"><p>BTC: {blockchainDaemon}</p></div>
                <div className="col-md-3"><p>LN: {lnDaemon}</p></div>
                <div className="col-md-6"><p>Network: {bitcoinNetwork}</p></div>
              </div>
              <p>Mining Mode: AUTO MINE</p>
              <p>HTTP: http://localhost:{restPort} </p>
              <p>RPC: http://localhost:{rpcPort} </p>
              <Link to="/supports" className="btn btn-block btn-warning mb-3">Create New Lapps</Link>
            </div>
            </div>
        </div>
        <div className="col-md-6">
          <div className="card my-3">
            <div className="container">
            <h5 className="m-2">Nodes</h5>
            <div class="table-wrapper-scroll-y my-custom-scrollbar mb-2">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="Name">Name</th>
                    <th scope="Name">Balance</th>
                    <th scope="Name">Peer</th>
                    <th scope="Name">Channel</th>
                  </tr>
                </thead>
                <tbody>
                {nodeContent}
                </tbody>
              </table>
              </div>
            </div>
          </div>
          <div className="card my-3">
            <div className="container">
            <h5 className="m-2">Invoices</h5>
            <div class="table-wrapper-scroll-y my-custom-scrollbar mb-2">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="Name">Name</th>
                    <th scope="Name">Value</th>
                    <th scope="Name">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">You</th>
                    <td>100000</td>
                    <td>12/12 01:11</td>
                  </tr>
                  <tr>
                    <th scope="row">Alice</th>
                    <td>120000</td>
                    <td>12/12 01:11</td>
                  </tr>
                  <tr>
                    <th scope="row">Bob</th>
                    <td>100000</td>
                    <td>12/12 01:11</td>
                  </tr>
                  <tr>
                    <th scope="row">Bob</th>
                    <td>100000</td>
                    <td>12/12 01:11</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
            </div>
            <div className="card my-3">
              <div className="container">
                <h5 className="m-2">Request History</h5>
                <div class="table-wrapper-scroll-y my-custom-scrollbar table-responsive mb-2">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th scope="Name">Date</th>
                        <th scope="Name">Request</th>
                        <th scope="Name">From</th>
                        <th scope="Name">To</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>12/11 12:20</td>
                        <td>call openChannel</td>
                        <td>You</td>
                        <td>Alice</td>
                      </tr>
                      <tr>
                        <td>12/11 12:20</td>
                        <td>POST /v1/transactions</td>
                        <td>You</td>
                        <td>Alice</td>
                      </tr>
                      <tr>
                        <td>12/11 12:20</td>
                        <td>POST /v1/channels</td>
                        <td>You</td>
                        <td>Alice</td>
                      </tr>
                      <tr>
                      <td>12/11 12:20</td>
                        <td>POST /v1/channels</td>
                        <td>You</td>
                        <td>Alice</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            
          </div>
        </div>
      </div>
      <Footer wsname={state.match.params.ws} />
    </React.Fragment>
  )
}

export default Dashboard;