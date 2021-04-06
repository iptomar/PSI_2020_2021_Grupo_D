import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import { useState, useCallback, useEffect } from "react";
import logo from "../../assets/logo.png";
import services from "../../services";

//centro do mapa quando o mapa faz load
const center = {
  lat: 39.23,
  lng: -8.68,
};

//tamanho e style do map
const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const options = {
  disableDefaultUI: false,
};

const Map = () => {
  // state que controla os marcadores
  // aqui se calhar vai ser carregado da base de dados
  const [markers, setMarkers] = useState([]);

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

  //TODO: this removes markers
  const onMapClick = useCallback((e) => {
    const newMarker = {
      _id: markers.length + 1,
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setMarkers([...markers, newMarker]);
  }, []);

  const [selectedMarker, setselectedMarker] = useState(null);

  //api key aqui
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBOxAahL77d5AtjV-Ijxf7p8jmff6MMGMA",
    markers,
  });

  // se isLoaded é true mete o component to googleMaps, se não escreve Loading Maps
  return isLoaded ? (
    <div>
      <h1 className="logo">
        Avé Maria <img src={logo} alt="" />
      </h1>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={10}
        center={center}
        options={options}
        onClick={onMapClick}
      >
        {markers.map((marker) => (
          //aqui faz o render dos marcadores anteriores e os que sejam a clicar
          <Marker
            key={marker._id}
            position={{ lat: marker.lat, lng: marker.lng }}
            //passa o objeto marker para o state dos markers
            onClick={() => {
              setselectedMarker(marker);
            }}

            //icon do marker pode ser mudado : icon = {}
          />
        ))}
        {selectedMarker && (
          //Info aqui. O 0.045 é para fazer com que a window fiquem em cima do marker.
          // LOREM IPSUM LOGO AQUI LETS GOOOOOOOOOOOO
          <InfoWindow
            onCloseClick={() => {
              setselectedMarker(null);
            }}
            position={{
              lat: selectedMarker.lat,
              lng: selectedMarker.lng,
            }}
          >
            <div>
              {/*O state do selected markers tem toda a informaçao do marker por isso é so meter*/}

              <h1>{selectedMarker.desc}</h1>
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
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  ) : loadError ? (
    <div>error</div>
  ) : (
    <div>Loading Maps...</div>
  );
};

export default Map;
