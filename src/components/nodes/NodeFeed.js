import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NodeCard from './NodeCard';

class NodeFeed extends Component {
  render() {
    const { nodes } = this.props;
    console.log(nodes)
    return nodes.map(node => <NodeCard key={node.name} node={node} nodes={nodes} />);
  }
}

NodeFeed.propTypes = {
  nodes: PropTypes.array.isRequired
};

export default NodeFeed;
