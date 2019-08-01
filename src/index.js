import React from 'react';
import ReactDOM from 'react-dom';
import Map from "./map";
import borderData from "./border";
import 'leaflet/dist/leaflet.css';
import LeafletPip from "leaflet-pip";
import L from "leaflet";
// import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import * as serviceWorker from './serviceWorker';

class Home extends React.Component{
  constructor() {
    super();
    this.state = {
      gameStarted:false,
      latlng:{lat:43.89, lng:-72.7317},
      moveMapBy: .001,
      // vtBorder: L.geoJSON(borderData)
    }
    this.startGame = this.startGame.bind(this)
  }  
  startGame = () => {
    let randomLat = Math.random() * (45.005419 - 42.73031) + 42.730315;
    let randomLng = (Math.random() * (71.510225 - 73.35218) + 73.35218) * -1;
    let layerArray = LeafletPip.pointInLayer([randomLng, randomLat], L.geoJSON(borderData))
    while (layerArray.length === 0) {    randomLat = Math.random() * (45.005419 - 42.73031) + 42.730315;
      randomLng = (Math.random() * (71.510225 - 73.35218) + 73.35218) * -1;
      layerArray = LeafletPip.pointInLayer([randomLng, randomLat], L.geoJSON(borderData))}
    this.setState({gameStarted:true, latlng:{lat:randomLat, lng:randomLng}})

  }
  goUp = () => {
    const {lat, lng} = this.state.latlng
    this.setState({latlng:{lat:lat+this.state.moveMapBy, lng:lng}})
  }
  render() {
    return (
      <div>
        <h1>GeoVermonter</h1>
        <div id = "nav"></div>
        <div id = "info"></div>
        <button id = "up" onClick={this.goUp}>Up</button>
        <button id = "down">Down</button>
        <button id = "left">Left</button>
        <button id = "right">Right</button>
        <button id = "start" disabled={this.state.gameStarted} onClick={this.startGame}>Start</button>
        <button id = "quit" disabled={!this.state.gameStarted}>Quick</button>
        <button id = "guess" disabled={!this.state.gameStarted}>Guess</button>
        <Map centerPoint = {this.state.latlng} />
      </div>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));

