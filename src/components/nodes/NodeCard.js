import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form, Col, Row } from 'react-bootstrap';

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
    const { nodes } = this.props;

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
      <Modal show={this.state.show} onHide={this.handleClose} >
					<Modal.Header closeButton>
						<Modal.Title>{node.name}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
            <div className="p">address: {node.address}</div>
            <div className="p">iditity_pubkey: {node.iditity_pubkey}</div>
            <div className="p">balance: {node.balance}</div>
            <div className="p">balance: {node.balance}</div>
            <div className="p">balance: {node.balance}</div>
            <Form>
              <Form.Row className="align-items-center">
                <Col sm={7} className="my-1">
                  <Form.Label className="mr-sm-5" htmlFor="inlineFormCustomSelect" srOnly>
                    Node
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="inlineFormCustomSelect"
                    custom
                  >
                    <option value="0">Choose...</option>
                    <option value="1">{nodes[1].name}</option>
                    <option value="2">{nodes[2].name}</option>
                    <option value="3">{nodes[3].name}</option>
                    <option value="4">{nodes[4].name}</option>
                  </Form.Control>
                </Col>
                <Col xs="auto" className="my-1">
                  <Button type="submit">Submit</Button>
                </Col>
              </Form.Row>
            </Form>
          </Modal.Body>
					<Modal.Footer>
            <div className="h5">balance: {node.balance}</div>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
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
