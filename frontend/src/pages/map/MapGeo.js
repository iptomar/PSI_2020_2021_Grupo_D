import React from "react";
import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import iconMarker from "../../assets/Icon_amarelo.png";
import L from 'leaflet';

const MapGeo = () => {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    tileload() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);

      map.flyTo(e.latlng, map.getZoom());
    },
  });

  const L = require('leaflet');
  const icon_marker = L.icon({
    iconUrl: iconMarker,
    iconSize: [24,24],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
});

  //Retorno do html do marker
  return position ? null : (
    <Marker icon={icon_marker} position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default MapGeo;
