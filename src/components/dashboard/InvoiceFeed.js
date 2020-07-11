import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InvoiceTr from './NodeTr';

class InvoiceFeed extends Component {
  render() {
    const { invoices } = this.props;
    return invoices.map(invoice => <NodeTr key={invoice._id} invoice={invoice} />);
  }
}

InvoiceFeed.propTypes = {
  invoices: PropTypes.array.isRequired
};

export default InvoiceFeed;
