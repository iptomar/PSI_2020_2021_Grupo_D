import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import Mapclick from "./MapClick";
import services from "../../services";
import ButtonForm from "../../components/button";
import "./map.css";
import logo from "../../assets/logo.png";
import Form from "../../components/PostForm";

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
  const [markers, setMarkers] = useState([]);

  const [toggleForm, setToggleForm] = useState(false);

  const [currentMarker, setCurrentMarker] = useState([]);

  const formToggle = () => {
    setToggleForm(!toggleForm);
  };

  const onCoordChange = (lat, lng) => {
    setCurrentMarker([{ lat, lng }]);
  };

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
            <Marker key={marker._id} position={marker}>
              <Popup>
                <div>
                  {/*O state do selected markers tem toda a informaçao do marker por isso é so meter*/}
                  <h3>Historia aqui</h3>
                  <p1>{marker.desc}</p1>
                  <img src={logo} alt="" alignItems="center" />
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
      {toggleForm && (
        <div className="form">
          <Form coords={currentMarker} toggleForm={formToggle}></Form>
        </div>
      )}
    </div>
  );
};

export default Map;
