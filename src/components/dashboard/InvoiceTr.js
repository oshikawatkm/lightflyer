import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InvoiceTr extends Component {

  render() {
    const { invoice } = this.props;

    return (
      <tr>
        <th scope="Name">{invoice.balance}</th>
        <td>{invoice.balance}</td>
        <td>{invoice.balance}</td>
      </tr>
    )
  }
}

InvoiceTr.propTypes = {
  invoice: PropTypes.object.isRequired,
};

export default InvoiceTr;
