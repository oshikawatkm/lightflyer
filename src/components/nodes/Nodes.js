import React from 'react'
import Footer from '../layout/Footer';
import useGetLNnodes from '../../hooks/getLNnodes';
import NodeFeed from './NodeFeed';
import Spinner from '../common/Spinner'

const Nodes = (props) => {
  let nodeContent;
  const [nodes] = useGetLNnodes()
  console.log(nodes)
  if (nodes[0] === undefined) {
    nodeContent = <Spinner />
  } else {
    nodeContent = <NodeFeed nodes={nodes} />
  }

  return (
    <React.Fragment>
      <h3 className="text-warning m-3">Nodes</h3>
      {nodeContent}
      <Footer wsname={props.match.params.id} />
    </React.Fragment>
  )
}



export default Nodes;