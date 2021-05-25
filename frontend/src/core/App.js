import "./App.css";
import React, { Component } from "react";
import ReactRouterSetup from "../pages/navroute/Router";
import AuthComponent from "./Auth";

export default class App extends Component {
  render() {
    return (
      <AuthComponent>
        <ReactRouterSetup />
      </AuthComponent>
    );
  }
}
