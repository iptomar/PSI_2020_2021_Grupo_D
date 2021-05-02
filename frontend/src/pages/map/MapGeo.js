import React from 'react'
import {useState} from 'react'
import {
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

const MapGeo = () => {
  const [position, setPosition] = useState(null)

  const map = useMapEvents({
    tileload() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default MapGeo
