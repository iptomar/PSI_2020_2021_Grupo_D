import React, { Component } from "react";
import { Form } from "react-bootstrap";
import services from "../../services";
import { Button } from "semantic-ui-react";

import logo_cut from "../../assets/logo_cut.png";

import "./Login.css";

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
      <section id="login">
        <div className="divimg"></div>
        <div className="container">
          <img src={logo_cut} alt="" />
          <h1>Backoffice Login</h1>
          <div className="textboxes">
            <Form onSubmit={(evt) => this.handleSubmit(evt)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
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
                  onChange={(evt) =>
                    this.setState({ password: evt.target.value })
                  }
                />
              </Form.Group>
              <Button primary type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </section>
    );
  }
}
