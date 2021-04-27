import "./Map.css"

import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default class Map extends Component {
  render() {
    return (
      <MapContainer center={[39.60199, -8.40924]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[39.60199, -8.40924]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}
