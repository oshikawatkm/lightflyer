import React, { Component } from 'react'
import Footer from '../layout/Footer';



class Nodes extends Component {
  render() {
    return (
      <React.Fragment>
        <h3 className="text-warning m-3">Nodes</h3>
        <div className="card bg-light p-2 mb-4">
          <div className="container">
          <h5>Your Node : vieonri348vreqriibir3h8inve</h5>
            <div className="row">
              <div className="col-md-6">
                <p className="m-1">idenfify_pubkey: nrioh89buv313481buf4f984</p>
                <p className="m-1">pubkey: nrioh89buv313481buf4f984</p> 
              </div>
              <div className="col-md-6">
                <h4 className="m-1">100000000000000 satoshi</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="card p-2 my-2 mx-5" style={{ backgroundColor: "#cccccc"}}>
          <div className="container">
            <h5>Alice : vieonri348vreqriibir3h8inve</h5>
              <div className="row">
                <div className="col-md-6">
                  <p className="m-1">idenfify_pubkey: nrioh89buv313481buf4f984</p>
                  <p className="m-1">pubkey: nrioh89buv313481buf4f984</p> 
                </div>
                <div className="col-md-6">
                  <h4>100000000000000 satoshi</h4>
                </div>
              </div>
          </div>
        </div>
        <div className="card p-2 my-2 mx-5" style={{ backgroundColor: "#cccccc"}}>
          <div className="container">
            <h5>Bob : vieonri348vreqriibir3h8inve</h5>
              <div className="row">
                <div className="col-md-6">
                  <p className="m-1">idenfify_pubkey: nrioh89buv313481buf4f984</p>
                  <p className="m-1">pubkey: nrioh89buv313481buf4f984</p> 
                </div>
                <div className="col-md-6">
                  <h4>100000000000000 satoshi</h4>
                </div>
              </div>
          </div>
        </div>
        <div className="card p-2 my-2 mx-5" style={{ backgroundColor: "#cccccc"}}>
          <div className="container">
            <h5>Chalrie : vieonri348vreqriibir3h8inve</h5>
              <div className="row">
                <div className="col-md-6">
                  <p className="m-1">idenfify_pubkey: nrioh89buv313481buf4f984</p>
                  <p className="m-1">pubkey: nrioh89buv313481buf4f984</p> 
                </div>
                <div className="col-md-6">
                  <h4>100000000000000 satoshi</h4>
                </div>
              </div>
          </div>
        </div>
        <div className="card p-2 my-2 mx-5" style={{ backgroundColor: "#cccccc"}}>
          <div className="container">
            <h5>Evan : vieonri348vreqriibir3h8inve</h5>
              <div className="row">
                <div className="col-md-6">
                  <p className="m-1">idenfify_pubkey: nrioh89buv313481buf4f984</p>
                  <p className="m-1">pubkey: nrioh89buv313481buf4f984</p> 
                </div>
                <div className="col-md-6">
                  <h4>100000000000000 satoshi</h4>
                </div>
              </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}


export default Nodes;