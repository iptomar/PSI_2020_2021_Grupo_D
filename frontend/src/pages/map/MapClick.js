import React from "react";
import {useState} from 'react'
import {
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";



const MapClick = () => {
  const [position, setPosition] = useState(null)

  useMapEvent('click', (e) => {
    setPosition(e.latlng)
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default MapClick
