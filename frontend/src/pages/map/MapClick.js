import React from "react";
import { useState } from "react";
import { Marker, Popup, useMapEvent } from "react-leaflet";
import iconMarker from "../../assets/Icon_amarelo.png";
import L from 'leaflet';

//Evento click para adicionar um marker no mapa
const MapClick = ({ onChange }) => {
  const [position, setPosition] = useState(null);

  useMapEvent("click", (e) => {
    setPosition([e.latlng.lat, e.latlng.lng]);
    onChange([e.latlng.lat, e.latlng.lng]);
  });

  const L = require('leaflet');
  const icon_marker = L.icon({
    iconUrl: iconMarker,
    iconSize: [24, 24],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
  });

  //Retorno do html do marker

  return position === null ? null : (
    <Marker icon={icon_marker} position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default MapClick;
