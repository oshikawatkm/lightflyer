import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OperateModal from './OperateModal'
import { Button, Modal } from 'react-bootstrap';

class NodeCard extends Component {
  constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
  }
  
  render() {
    const { node } = this.props;

    return (
      <React.Fragment>
        <div className="card p-2 my-2 mx-5">
        <div className="container">
            <h5 className="d-inline">{node.name} : </h5>
            <p className="d-inline">{node.iditity_pubkey}</p>
            <div className="row">
              <div className="col-sm-7">
                <small className="m-0 text-small" style={{margin: 0}}>address:</small>
                <p className="m-1">{node.address}</p>
              </div>
              <div className="col-sm-3">
              <small className="m-0 text-small" style={{margin: 0}}>balance:</small>
                <h4>{node.balance}</h4>
              </div>
              <div className="col-sm-2">
              <Button variant="warning" onClick={this.handleShow}>
                Operate
              </Button>
              </div>
            </div>
        </div>
      </div>
      <Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
            </Button>
						<Button variant="primary" onClick={this.handleClose}>
							Save Changes
            </Button>
					</Modal.Footer>
				</Modal>
      </React.Fragment>
    )
  }
}

NodeCard.propTypes = {
  node: PropTypes.object.isRequired,
};

export default NodeCard;
