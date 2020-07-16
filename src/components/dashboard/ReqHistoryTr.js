import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateTImeFormater from '../common/datetimeformater';

class ReqHistoryTr extends Component {

  render() {
    const { reqhistory } = this.props;

    return (
      <tr>
        <th scope="Name">{DateTImeFormater(reqhistory.timestamp)}</th>
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