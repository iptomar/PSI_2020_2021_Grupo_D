import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import services from "../../services";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "some@some.some", password: "some" };
  }

  handleSubmit(evt) {
    evt.preventDefault();

    services.user
      .login(this.state)
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
  }

  render() {
    const { email, password } = this.state;
    return (
      <Form onSubmit={(evt) => this.handleSubmit(evt)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(evt) => this.setState({ email: evt.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(evt) => this.setState({ password: evt.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg">
          Login
        </Button>
      </Form>
    );
  }
}
