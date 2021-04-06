import "./App.css";
import Map from "../pages/map/Map.js";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [],
    };
  }

  render() {
    return <Map />;
  }
}
