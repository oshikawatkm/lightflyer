import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Setup extends Component {
	render() {
		return (
      <div className="text-center text-warning mb-5">
        <h1 className="display-3" style={{ marginTop: 80 }}>Light Flyer</h1>
        <p>v 1.0.0</p>
        <Link to="/setup" className="btn btn-outline-warning mt-3">Create New Workspace</Link>
        <p className="mt-4">OR</p>
        <h3>Use Workspace</h3>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="workspaces my-3">
              <div className="workspace">
                <a href="#" className="text-warning">somelapps1</a>
              </div>
              <div className="workspace">
                <a href="#" className="text-warning">somelapps2</a>
              </div>
              <div className="workspace">
                <a href="#" className="text-warning">somelapps3</a>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
	}
}


export default Setup;