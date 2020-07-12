import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateFormater from '../common/dateformater';

class InvoiceTr extends Component {

  render() {
    const { invoice } = this.props;

    return (
      <tr>
        <th scope="Name">{invoice.lnnode._doc.name}</th>
        <td>{invoice.value}</td>
        <td>{DateFormater(invoice.timestamp)}</td>
      </tr>
    )
  }
}

InvoiceTr.propTypes = {
  invoice: PropTypes.object.isRequired,
};

export default InvoiceTr;
