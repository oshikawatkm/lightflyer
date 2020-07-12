import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InvoiceTr from './InvoiceTr';

class InvoiceFeed extends Component {
  render() {
    const { invoices } = this.props;
    return invoices.map(invoice => <InvoiceTr key={invoice._id} invoice={invoice} />);
  }
}

InvoiceFeed.propTypes = {
  invoices: PropTypes.array.isRequired
};

export default InvoiceFeed;
