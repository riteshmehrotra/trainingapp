import React, { useState } from 'react';
import { Button, Form, Row, Col, Card } from 'react-bootstrap';
import { render } from '@testing-library/react';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      isFormFilled: false
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  render() {
    return (
      <Row style={{ justifyContent: "center", marginTop: "15%" }}>
        <Col lg={6}>
          <Card>
            <Card.Header>Welcome to TDD with React Training</Card.Header>
            <Card.Body>
              <Form onSubmit = {this.handleFormSubmit}>
                <Form.Control type="text" placeholder="Enter your name" value={this.state.name} onChange={(e) => this.handleNameChange(e)}></Form.Control>
                <br></br>
                <Button variant="success" type="submit" disabled={!this.state.isFormFilled} block onClick={this.handleFormSubmit}>Enter</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }

  handleNameChange(e) {
    if (e.target.value.trim().length > 0)
      this.setState({ name: e.target.value, isFormFilled: true });
  }


  handleFormSubmit(){
    if(this.state.name)
      this.props.onSubmit(this.state.name)
  }

}


export default Login;