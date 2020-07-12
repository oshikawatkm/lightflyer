import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateFormater from '../common/dateformater';

class ReqHistoryTr extends Component {

  render() {
    const { reqhistory } = this.props;

    return (
      <tr>
        <th scope="Name">{DateFormater(reqhistory.timestamp)}</th>
        <td>{reqhistory.request}</td>
        <td>{reqhistory.sender}</td>
        <td>{reqhistory.receiver}</td>
      </tr>
    )
  }
}

ReqHistoryTr.propTypes = {
  node: PropTypes.object.isRequired,
};

export default ReqHistoryTr;