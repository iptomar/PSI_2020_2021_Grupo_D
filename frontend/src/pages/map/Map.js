import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { useCallback, useState, useEffect } from "react";
import Mapclick from './MapClick'
import services from "../../services";
import Button from '../../components/button'
import './map.css'
import logo from "../../assets/logo.png";

const Map = () => {

 const center = {
    lat: 39.23,
    lng: -8.68,
  };

  const containerStyle = {
    width: "100vw",
    height: "100vh",
  };

  // state que controla os marcadores
  // aqui se calhar vai ser carregado da base de dados
  const [markers, setMarkers] = useState([]);

  const [toggleForm, setToggleForm] = useState(false);

  const formToggle = () => {
      setToggleForm(!toggleForm);
    }

  useEffect(() => {
    async function getPoints() {
      await services.map
        .getPoints()
        .then((points) => {
          setMarkers(points);
          console.log(points);
        })
        .catch((e) => {
          console.error(e);
        });
    }
    getPoints();
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={true}
      style={containerStyle}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {toggleForm && <Mapclick/>}
     <div className="button"><Button toggleForm = {formToggle} ></Button></div>
      {!toggleForm && markers.map((marker) => (
          //aqui faz o render dos marcadores anteriores e os que sejam a clicar
      <Marker position={marker}>
        <Popup>
          <div>
              {/*O state do selected markers tem toda a informaçao do marker por isso é so meter*/}

              <h1>{marker.desc}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <img src={logo} alt="" alignItems="center" />
            </div>
        </Popup>
      </Marker>
            //icon do marker pode ser mudado : icon = {}
        ))}
    
    </MapContainer>
  );
}

export default Map

