import logo from './logo.png'
import './App.css';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';
import {useState,useCallback} from 'react';

//tamanho e style do map
const containerStyle = {
  width: '50vw',
  height: '50vh'
};

//centro do mapa quando o mapa faz load
const center = {
  lat: 39.23,
  lng: -8.68,
};

const options = {
  disableDefaultUI: false,
}

//?nao faz nada mas acho que é para carregar da bd tambem (?? talvez)
const libraries = ["places"];




const App = () => {
  // state que controla os marcadores
  // aqui se calhar vai ser carregado da base de dados
  const [markers, setMarkers] = useState([{
    lat: null,
    long : null,
    time : new Date(),
  }]);

  //api key aqui
  const {isLoaded,loadError} = useLoadScript({
    googleMapsApiKey: "AIzaSyBOxAahL77d5AtjV-Ijxf7p8jmff6MMGMA",
    libraries,
  })

  // se isLoaded é true mete o component to googleMaps, se não escreve Loading Maps
  return isLoaded ? (
    <div>
      <h1> Avé Maria <img src={logo} alt=""/> </h1>
      <GoogleMap 
      mapContainerStyle = {containerStyle}
      zoom = {10}
      center = {center}
      options = {options}
      onClick = {(e) => {
        const newMarker = {
          lat : e.latLng.lat(),
          lng : e.latLng.lng(),
          time : new Date(),
        }
        setMarkers([...markers,newMarker])
      }}
      >
      {markers.map((marker) => (
        //aqui faz o render dos marcadores anteriores e os que sejam a clicar
        <Marker 
          key={marker.time.toISOString()} 
          position = {{lat: marker.lat, lng: marker.lng }} 
          //icon do marker pode ser mudado : icon = {}
        />
        ))}
          </GoogleMap>
    </div>
  ) : <div>Loading Maps...</div>
}


export default App

