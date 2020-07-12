import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NodeTr extends Component {

  render() {
    const { node } = this.props;

    return (
      <tr>
        <th scope="Name">{node.name}</th>
        <td>{node.balance}</td>
        <td>{node.peerCount}</td>
        <td>{node.channelCount}</td>
      </tr>
    )
  }
}

NodeTr.propTypes = {
  node: PropTypes.object.isRequired,
};

export default NodeTr;
