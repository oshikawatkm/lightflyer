import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Setup extends Component {
	render() {
		return (
      <div className="text-center text-warning ">
        <h1 className="display-3" style={{ marginTop: "100px" }}>Light Flyer</h1>
        <p>v 1.0.0</p>
        <Link to="/setup" className="btn btn-outline-warning mt-3">Create New Workspace</Link>
        <p className="mt-4">OR</p>
        <h3>Use Workspace</h3>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <ul className="list-group bg-dark my-3">
              <li className="list-group-item bg-dark">
                <a href="#" className="text-warning">somelapps1</a>
              </li>
              <li class="list-group-item bg-dark">
                <a href="#" className="text-warning">somelapps2</a>
              </li>
              <li class="list-group-item bg-dark">
                <a href="#" className="text-warning">somelapps3</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
	}
}


export default Setup;