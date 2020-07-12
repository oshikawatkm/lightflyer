import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';


class Footer extends Component {
  render() {
    const {wsname} = this.props;
    return (
    <div id="footer">
      <div className="row text-center">
        <div className="footer-item col-md-2 p-3">
          <Link to={`/workspaces/${wsname}/dashboard`} className="text-warning"><i className="fas fa-toolbox fa-2x" /><br /> Dashboard</Link>
        </div>
        <div className="footer-item col-md-2 p-3">
          <Link to={`/workspaces/${wsname}/nodes`} className="text-warning"><i className="fas fa-server fa-2x"/><br /> Nodes</Link>
        </div>
        <div className="footer-item col-md-2 p-3">
          <Link to={`/workspaces/${wsname}/transactions`} className="text-warning"><i className="fas fa-file-contract fa-2x" /><br /> Transactions</Link>
        </div>
        <div className="footer-item col-md-2 p-3">
          <Link to={`/workspaces/${wsname}/blocks`}  className="text-warning"><i className="fas fa-cube fa-2x" /><br /> Blocks</Link>
        </div>
        <div className="footer-item col-md-2 p-3">
          <Link to={`/workspaces/${wsname}/blockchain`}  className="text-warning"><i className="fas fa-cubes fa-2x" /><br /> Blockchain</Link>
        </div>
        <div className="footer-item col-md-2 p-3">
          <Link to={`/workspaces/${wsname}/setting`} className="text-warning"><i className="fas fa-cog fa-2x" /><br /> Setting</Link>
        </div>
      </div>
    </div>
    )
  }
}

Footer.propTypes = {
  wsname: PropTypes.string.isRequired
};


export default Footer;