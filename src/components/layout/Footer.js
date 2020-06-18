import React from 'react'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';

const Footer = () => {
  return (
    <div id="footer">
      <div className="row text-center">
        <div className="footer-item col-md-2 p-3">
          <Link to="/dashboard" className="text-warning"><i className="fas fa-toolbox fa-2x" /><br /> Dashboard</Link>
        </div>
        <div className="footer-item col-md-2 p-3">
          <Link to="/nodes" className="text-warning"><i className="fas fa-server fa-2x"/><br /> Nodes</Link>
        </div>
        <div className="footer-item col-md-2 p-3">
          <Link to="/transactions" className="text-warning"><i className="fas fa-file-contract fa-2x" /><br /> Transactions</Link>
        </div>
        <div className="footer-item col-md-2 p-3">
          <Link to="/blocks" className="text-warning"><i className="fas fa-cube fa-2x" /><br /> Blocks</Link>
        </div>
        <div className="footer-item col-md-2 p-3">
          <Link to="/blockchain" className="text-warning"><i className="fas fa-cubes fa-2x" /><br /> Blockchain</Link>
        </div>
        <div className="footer-item col-md-2 p-3">
          <Link to="/Setting" className="text-warning"><i className="fas fa-cog fa-2x" /><br /> Setting</Link>
        </div>
      </div>
    </div>
  )
}


export default Footer;