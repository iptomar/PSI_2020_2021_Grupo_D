import "./App.css";
import Map from "../pages/map/Map.js";
import React, { Component } from "react";
import services from "../services";
import ReactRouterSetup from "../pages/navroute/Router";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [],
    };
  }

  render() {
    //return <Map />;
    return <ReactRouterSetup></ReactRouterSetup>;
  }
}
