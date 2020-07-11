import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NodeTr from './NodeTr';

class NodeFeed extends Component {
  render() {
    const { nodes } = this.props;
    console.log(nodes)
    return nodes.map(node => <NodeTr key={node.name} node={node} />);
  }
}

NodeFeed.propTypes = {
  nodes: PropTypes.array.isRequired
};

export default NodeFeed;
