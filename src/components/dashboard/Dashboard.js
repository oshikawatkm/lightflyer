import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../layout/Footer';
const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

let config;

class Dashboard extends Component {

  componentDidMount() {
    ipcRenderer.send('getWorkspace', 'test-ws')
    ipcRenderer.send('start', 'test-ws')
  }
  

  render() {
    ipcRenderer.on('getWorkspace-res', (e, workspace) => {
      config = workspace[0]._doc;
      console.log(config)
    })

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-outline-warning mt-3" ><i className="fas fa-backspace"></i> Top</Link>
            <div className="card my-3">
              <div className="container">
                <h4 className="m-2">Network</h4>
                <div id="network" className="bg-secondary mb-3" style={{ width:410, height: 200}}>
                </div>
                <h5>Environment</h5>
                <div className="row">
                  <div className="col-md-6"><p>Blockchain: {config}</p></div>
                  <div className="col-md-6"><p>Network: {config}</p></div>
                </div>
                <div className="row">
                  <div className="col-md-6"><p>Blockchain: {config}</p></div>
                  <div className="col-md-6"><p>Network: {config}</p></div>
                </div>
                <p>Blockchain: {config}</p>
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
}


export default Dashboard;