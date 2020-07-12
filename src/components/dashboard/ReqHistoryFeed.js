import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReqHistoryTr from './ReqHistoryTr';

class ReqHistoryFeed extends Component {
  render() {
    const { reqhistorys } = this.props;
    return reqhistorys.map(reqhistory => <ReqHistoryTr key={reqhistory.name} reqhistory={reqhistory} />);
  }
}

ReqHistoryFeed.propTypes = {
  reqhistorys: PropTypes.array.isRequired
};

export default ReqHistoryFeed;
