import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../layout/Footer';
import useGetWorkspace from '../../hooks/getWorkspace'

const Dashboard = () => {
  const [workspaceName, rpcPort, restPort] = useGetWorkspace()
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-3">
              <Link to="/" className="btn btn-outline-warning mt-3" ><i className="fas fa-backspace"></i> Top</Link>
            </div>
            <div className="col-md-9">
              <h3 class="text-warning">{workspaceName}</h3>
            </div>
          </div>
          <div className="card my-3">
            <div className="container">
              <h4 className="m-2">Network</h4>
              <div id="network" className="bg-secondary mb-3" style={{ width:410, height: 200}}>
              </div>
              <h5>Environment</h5>
              <div className="row">
  <div className="col-md-6"><p>Blockchain: </p></div>
  <div className="col-md-6"><p>Network: {rpcPort}</p></div>
              </div>
              <div className="row">
                <div className="col-md-6"><p>Blockchain: </p></div>
                <div className="col-md-6"><p>Network: </p></div>
              </div>
              <div className="row">
                <div className="col-md-6"><p>HTTP: http://localhost:{restPort} </p></div>
                <div className="col-md-6"><p>RPC: http://localhost:{rpcPort} </p></div>
              </div>
              <p>Blockchain: </p>
              <p>LN node: lnd</p>
              <Link to="/supports" className="btn btn-block btn-warning mb-3">Create New Lapps</Link>
            </div>
            </div>
        </div>
        <div className="col-md-6">
          <div className="card my-3">
            <div className="container">
            <h4 className="m-2">Transactions</h4>

            </div>
          </div>
          <div className="card my-3">
            <div className="container">
            <h4 className="m-2">Invoices</h4>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Dashboard;