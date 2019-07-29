import L from 'leaflet';
import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './App.css';


//   var map = L.map('mymap').setView([44.48, -73.21], 13);

//   var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

//  const myIcon = L.icon({
//   iconUrl: '/img/cow-clipart.png',
//   iconSize: [50, 82]
// });

var myIcon = L.icon({
  iconUrl: './public/favicon.ico',
  iconSize: [25, 42],
  iconAnchor: [22, 94],
  popupAnchor: [-10, -90]
});

class App extends Component {
  state = {
    lat: 51.505,
    lng: -0.08,
    zoom: 14
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <div className="App">
        <Map className = "map" center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker 
          position={position}
          icon={myIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
export default App;
