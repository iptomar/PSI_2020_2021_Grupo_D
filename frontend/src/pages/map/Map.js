import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import Mapclick from "./MapClick";
import services from "../../services";
import ButtonForm from "../../components/button";
import "./map.css";
import Form from "../../components/PostForm";
import L from 'leaflet';
import iconMarker from "../../assets/Icon_amarelo.png";

//Constante que determina o centro do mapa
const Map = () => {
  const center = {
    lat: 39.23,
    lng: -8.68,
  };

  //Constante que determina a altura e largura do mapa
  const containerStyle = {
    width: "100vw",
    height: "100vh",
  };

  // constantes  para controle dos marcadores
  const [markers, setMarkers] = useState([]);

  const [toggleForm, setToggleForm] = useState(false);

  const [currentMarker, setCurrentMarker] = useState([0.0, 0.0]);

  //Evento para display do formulario de submissão de novo marker
  const formToggle = () => {
    setToggleForm(!toggleForm);
  };

  //Evento para adicionar ou remover um marker
  const onCoordChange = (marker) => {
    setCurrentMarker(marker);
  };

  //Função que faz o load dos respectivos markers no load da pagina
  useEffect(() => {
    async function getPoints() {
      await services.map
        .getStories()
        .then((points) => {
          setMarkers(points);
        })
        .catch((e) => {
          console.error(e);
        });
    }
    getPoints();
  }, []);

  const L = require('leaflet');
  const icon_marker = L.icon({
    iconUrl: iconMarker,
    iconSize: [24, 24],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
  });

  //Retorno do html do mapa
  return (
    <div className="grid-container ">
      <MapContainer
        center={center}
        zoom={7}
        scrollWheelZoom={true}
        style={containerStyle}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {toggleForm && <Mapclick onChange={onCoordChange} />}

        {/* button */}
        {!toggleForm && (
          <div className="sembutton">
            <ButtonForm toggleForm={formToggle} />
          </div>
        )}
        {!toggleForm &&
          markers.map((marker) => (
            //aqui faz o render dos marcadores anteriores e os que sejam a clicar
            <Marker icon={icon_marker} key={marker._id} position={marker}>
              <Popup>
                <div>
                  {/*O state do selected markers tem toda a informaçao do marker por isso é so meter*/}
                  <h3>Historia aqui</h3>
                  <p1>{marker.story}</p1>
                  <img
                    src={marker.image}
                    alignItems="center"
                    style={{
                      width: "auto",
                      maxWidth: "300px",
                      maxHeight: "300px",
                    }}
                  />
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
      {toggleForm && (
        <div className="form">
          <Form marker={currentMarker} toggleForm={formToggle}></Form>
        </div>
      )}
    </div>
  );
};

export default Map;
