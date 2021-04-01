import "./App.css";
import Map from "../pages/map/Map.js";
import React, { Component } from "react";
import services from "../services";



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [],
    };
  }

  //TODO: isto apenas serve de exemplo, modificar isto na classe Map
  componentDidMount() {
    services.map
      .getPoints()
      .then((points) => {
        console.log(points);
        this.setState({
          points,
        });
      })
      .catch((e) => console.error(e));
  }

  render() {
    return <Map />;
  }
}
