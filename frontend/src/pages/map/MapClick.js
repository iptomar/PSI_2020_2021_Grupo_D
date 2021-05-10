//Importação de módulos

import React from "react";
import {useState} from 'react'
import {
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";


//Evento click para adicionar um marker no mapa
const MapClick = ({onChange}) => {
  const [position, setPosition] = useState(null)

  useMapEvent('click', (e) => {

    setPosition(e.latlng);
    const {lat,lng} = e.latlng;
    onChange(lat,lng);
  })


  //Retorno do html do marker

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default MapClick
