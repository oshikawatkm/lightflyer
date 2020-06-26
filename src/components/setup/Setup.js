import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from "react-router-dom";
import TopplogyCanvas from './TopplogyCanvas';


const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;
const userHome = process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"];
const path = require('path')

const Setup = () => {
  const [formData, setFormData] = useState({
    workspaceName: 'default2',
    configFileDir: path.join(userHome, ".lightflyer"),
    miningPace: 10,
    fee: 1,
    nodeNumber: 10,
    satoshi: 10000000000000,
    rpcport: 10001,
    restport: 8001,
    address: '',
    identify_pubkey: ''
  })

  const { 
    workspaceName,
    configFileDir,
    miningPace,
    fee,
    nodeNumber,
    satoshi,
    rpcport,
    restport,
    address,
    identify_pubkey
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


  const onSubmit = e => {
    e.preventDefault();

    //ipcRenderer.send("init", formData)
    window.location.href = "dashboard"
  }

  // const displayChange = (e) => {

  // }

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
                name="workspaceName"
                value={workspaceName}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="configFileDir">Config File Directory</label>
              <input
                id="configFileDir"
                className="form-control" 
                type="text"
                placeholder="" 
                name="configFileDir"
                value={configFileDir}
                onChange={onChange}
              />
            </div>
            <div className="mt-5 text-center">
              <input className="btn btn-primary" type="submit" value="Blockchain Setting" />
            </div>
          </div>

          <div id="blockchain_setting">
            <h3 className="my-3">Blockchain Setting</h3>
            <div className="form-group">
              <p>Bitcoin Daemon</p>
              <div class="form-check form-check-inline ml-3">
                <input className="form-check-input" type="radio" name="btcDaemonSettings" id="btcDaemonOption1" value="btcd" />
                <label className="form-check-label" htmlFor="btcDaemonOption1">btcd</label>
              </div>
              <div class="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="btcDaemonSettings" id="btcDaemonOption1" value="bitcoind" />
                <label className="form-check-label" htmlFor="btcDaemonOption1">bitcoind</label>
              </div>
            </div>
            <div className="form-group">
              <p>Network</p>
              <div class="form-check form-check-inline ml-3">
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
              <label htmlFor="ownNodeNumber">Mining Pace (sec)</label>
              <input
                id="miningPace"
                className="form-control" 
                type="text"
                placeholder="" 
                name=""
                value={miningPace}
                onChange={onChange}
              />
              <small id="ownNodeNumberHelp" className="form-text text-muted">Set only when not using the AUTOMINE mode.</small>
            </div>
            <div className="form-group">
              <label htmlFor="fee">Fee (satoshi)</label>
              <input
                id="fee"
                className="form-control" 
                type="text"
                placeholder="1" 
                name="fee"
                value={fee}
                onChange={onChange}
              />
              <small id="ownNodeNumberHelp" className="form-text text-muted">Set only when not using the AUTOMINE mode.</small>
            </div>
            <div className="mt-5 text-center">
              <input className="btn btn-primary" type="submit" value="Node Setting"  />
            </div>
          </div>

          <div id="node-setting">
            <h3 className="mt-5 mb-3">Node Setting</h3>
            <div className="form-group">
              <p>Lightning Daemon</p>
              <div className="form-check form-check-inline ml-3">
                <input className="form-check-input" type="radio" name="lndDaemonSetting" id="lnDaemonOption1" value="lnd" />
                <label className="form-check-label" htmlFor="lnDaemonOption1">lnd</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="lndDaemonSetting" id="lndDaemonOption2" value="c-lightning" />
                <label className="form-check-label" htmlFor="lndDaemonOption2">c-lightning</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="nodeNumber">Number of nodes</label>
                  <input
                    id="nodeNumber"
                    className="form-control" 
                    type="number"
                    placeholder="10" 
                    name="nodeNumber"
                    value={nodeNumber}
                    onChange={onChange}
                  />
                  <small id="ownNodeNumberHelp" className="form-text text-muted">Up to 10 are available.</small>
                </div>
              </div>
              <div className="col-md-6">
              <div className="form-group">
                  <label htmlFor="satoshi">The amount of satoshi owned by a node</label>
                  <input
                    id="satoshi"
                    className="form-control" 
                    type="text"
                    placeholder="100000000000" 
                    name="satoshi"
                    value={satoshi}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="">RPC Port Number</label>
                  <input
                    type="text"
                    className="form-control" 
                    placeholder="RPC Port Number" 
                    name="rpcport"
                    value={rpcport}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="restport">Rest Port Number</label>
                  <input
                    id="restport"
                    type="text"
                    className="form-control" 
                    placeholder="Rest Port Number" 
                    name="restports"
                    value={restport}
                    onChange={onChange}
                  />
                </div>
              </div>
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
                onChange={onChange}
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
                onChange={onChange}
              />
              <small id="identifyPubkeyHelp" className="form-text text-muted">Generate automatically if left blank</small>
            </div>
            <div className="mt-5 text-center">
              <input className="btn btn-primary" type="submit" value="Setting Topology"  />
            </div>
          </div>

          <div id="topology-content" className="mt-5">
            <input className="btn btn-secondary mb-3" type="submit" value="&#062; back" />
            <TopplogyCanvas />
            <div className="mt-5 text-center">
              <button type="submit" className="btn btn-primary">
                Start Network
              </button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}


export default Setup;