import React from 'react';
import { Link } from "react-router-dom";
import useInitApp from '../../hooks/initApp'
import useGetWorkspaces from '../../hooks/getWorkspaces'
import { withRouter } from 'react-router-dom';

const Setup = () => {
  //useInitApp()
  const [workspaces] = useGetWorkspaces();

  
  return (
    <div className="text-center text-warning mb-5">
      <h1 className="display-2" style={{ marginTop: 130 }}>Light Flyer</h1>
      <p>v 0.1.0</p>
      <Link to="/setup" className="btn btn-outline-warning mt-3">Create New Workspace</Link>
      <p className="mt-4">OR</p>
      <h3>Use Workspace</h3>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="workspaces my-3">
            {workspaces.map(ws => (<div className="workspace">
            <Link to={`/workspaces/${ws}/dashboard`} className="text-warning">{ws}</Link>
            </div>))}
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  )
}


export default Setup;