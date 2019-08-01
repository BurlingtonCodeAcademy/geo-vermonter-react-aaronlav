import React from "react";
import L from 'leaflet';
//import 
const style={height: "600px"}
class Map extends React.Component {
 componentDidUpdate({centerPoint}) {
   if (this.props.centerPoint != centerPoint) {
     this.map.panTo(this.props.centerPoint) 
   }
 }
  componentDidMount() {
    this.map = L.map('map', {
      layers: [
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        })
      ]
    }) .setView([43.89, -72.7317], 8)

  } render() {
    return(<div id="map" style = {style}></div>)
  }
}
export default Map