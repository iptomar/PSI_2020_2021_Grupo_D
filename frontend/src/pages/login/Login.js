import "./Login.css";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form } from "react-bootstrap";
import services from "../../services";
import { Button } from "semantic-ui-react";
import logo_cut from "../../assets/Icon_amarelo.png";
import AuthContext from "../../configs/authContext";

export default class Login extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = { email: "some@some.some", password: "some", redirect: false };
  }

  handleSubmit(evt) {
    evt.preventDefault();

    services.user
      .login(this.state)
      .then((res) => {
        this.context.login(res);
        this.setState({ redirect: true });
      })
      .catch((_) => console.error("erro a realizar o login"));
  }

  render() {
    const { email, password, redirect } = this.state;
    return (
      <section id="login">
        <div className="divimg"></div>
        <div className="container">
          {redirect && <Redirect to="/backoffice/dashboard" />}
          <img src={logo_cut} alt="" width="150" height="150" />
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
