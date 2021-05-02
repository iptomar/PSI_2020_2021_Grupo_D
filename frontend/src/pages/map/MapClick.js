import React from "react";
import {useState} from 'react'
import {
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";



const MapClick = ({onChange}) => {
  const [position, setPosition] = useState(null)

  useMapEvent('click', (e) => {
    setPosition(e.latlng);
    const {lat,lng} = e.latlng;
    onChange(lat,lng);
  })





  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default MapClick
