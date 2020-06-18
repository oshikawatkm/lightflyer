import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import TopplogyCanvas from './TopplogyCanvas';


const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

const Setup = () => {
  const [formData, serFormData] = useState({
    workspaceName: '',
    configFileDir: '~/.lightflyer',
    miningPace: 10,
    ownNodeNumber: 1,
    rpcport: 10001,
    restport: 8001,
    address: '',
    identify_pubkey: '',
  })

  const [workspaceName, setWorkspaceName] = useState('')
  const [configFileDir, setConfigFileDir] = useState('~/.lightflyer')
  const [miningPace, setMiningPace]       = useState('10')
  const [ownNodeNumber, setOwnNodeNumber] = useState('10')
  const [rpcport, setRpcport]             = useState('10001')
  const [restport, setRestport]           = useState('10011')
  const [address, setAddress]             = useState('')
  const [identify_pubkey, setIdentifyPubkey]  = useState('')

  const onSubmit = e => {
    e.preventDefault();

    const newConfig = {
      
    }

    ipcRenderer.on("init", newConfig)
  }

  const onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  return (
    <React.Fragment>
      <h1 className="text-center text-warning my-5">Setup New Work Space</h1>
      <div className="bg-light container p-5 mb-5">
        <Link to="/" className="btn btn-secondary mb-3">&#062; back</Link>
        <form className="form" onSubmit={onSubmit}>
          <div id="workspace_setting" class="mb-5">
            <h3 className="my-3">Workspace Setting</h3>
            <div className="form-group">
              <label htmlFor="workspaceName">Workspace Name</label>
              <input
                id="workspaceName"
                className="form-control" 
                type="text"
                placeholder="" 
                name=""
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="configFileDir">Config File Directory</label>
              <input
                id="configFileDir"
                className="form-control" 
                type="text"
                placeholder="" 
                name=""
                value={configFileDir}
                onChange={(e) => setConfigFileDir(e.target.value)}
              />
            </div>
          </div>
          <h3 className="my-3">Blockchain Setting</h3>
          <div className="form-group">
            <p>Bitcoin Daemon</p>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="btcDaemonSettings" id="btcDaemonOption1" value="btcd" />
              <label className="form-check-label" htmlFor="btcDaemonOption1">btcd</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="btcDaemonSettings" id="btcDaemonOption1" value="bitcoind" />
              <label className="form-check-label" htmlFor="btcDaemonOption1">bitcoind</label>
            </div>
            <p>Network</p>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="networkSettings" id="networkOption1" value="mainnet" />
              <label className="form-check-label" htmlFor="networkOption1">mainnet</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="networkSettings" id="networkOption2" value="testnet" />
              <label className="form-check-label" htmlFor="networkOption2">testnet</label>
            </div>
            <div class="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="networkSettings" id="networkOption3" value="regtest" />
              <label className="form-check-label" htmlFor="networkOption3">regtest</label>
            </div>
          </div>
          <div className="form-group">
            <p>Use Auto Mining Mode</p>
            <div className="ml-5">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Use Automine
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="ownNodeNumber">Mining Pace</label>
            <input
              id="miningPace"
              className="form-control" 
              type="text"
              placeholder="" 
              name=""
              value={miningPace}
              onChange={(e) => setMiningPace(e.target.value)}
            />
             <small id="ownNodeNumberHelp" className="form-text text-muted">Set only when not using the AUTOMINE mode.</small>
          </div>
          <h3 className="mt-5 mb-3">Node Settings</h3>
          <p>Lightning Daemon</p>
          <div Name="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="lnDaemonSettings" id="lnDaemonOption1" value="btcd" />
            <label className="form-check-label" htmlFor="lnDaemonOption1">lnd</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="lndDaemonSettings" id="lnDaemonOption2" value="bitcoind" />
            <label className="form-check-label" htmlFor="lndDaemonOption1">c-lightning</label>
          </div>
          <div className="form-group">
            <label htmlFor="ownNodeNumber">Number of nodes to operate</label>
            <input
              id="ownNodeNumber"
              className="form-control" 
              type="text"
              placeholder="" 
              name=""
              value={ownNodeNumber}
              readonly
            />
             <small id="ownNodeNumberHelp" className="form-text text-muted">Only one is currently available.</small>
          </div>
          <div className="form-group">
            <label htmlFor="">RPC Port Number</label>
            <input
              type="text"
              className="form-control" 
              placeholder="RPC Port Number" 
              name="rpcport"
              value={rpcport}
            />
          </div>
          <div className="form-group">
            <label htmlFor="restport">Rest Port Number</label>
            <input
              id="restport"
              type="text"
              className="form-control" 
              placeholder="Rest Port Number" 
              name="restports"
              value={restport}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Node Address</label>
            <input
              id="address"
              type="text"
              className="form-control" 
              placeholder="Node address" 
              name="address"
              value={address}
            />
            <small id="addressHelp" className="form-text text-muted">Generate automatically if left blank</small>
          </div>
          <div className="form-group">
            <label htmlFor="identify_pubkey">Node Identify Public Key</label>
            <input
              id="identifyPubkey"
              type="text"
              className="form-control" 
              placeholder="Node address" 
              name="identify_pubkey"
              value={identify_pubkey}
            />
            <small id="identifyPubkeyHelp" className="form-text text-muted">Generate automatically if left blank</small>
          </div>
          <div className="mt-5 text-center">
            <input className="btn btn-primary" type="submit" value="Setting Topology" />
          </div>


          <div id="topology-content" className="mt-5">
            <input className="btn btn-secondary mb-3" type="submit" value="&#062; back" />
            <TopplogyCanvas />
            <div className="mt-5 text-center">
              <Link to="/dashboard" className="btn btn-primary" >Start Network</Link>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}


export default Setup;