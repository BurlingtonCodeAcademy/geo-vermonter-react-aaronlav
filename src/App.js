import L from 'leaflet';
import React from 'react';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
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



//---- Notes 7/29 ----\\




// class App extends React.Component {
//   render () {
//     return (
//       <div className="App">
//         <h1>Hey class,  more react shit....</h1>
//       </div>
//     )
//   }
// }


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello class, react and shit
//       </h1>
//     </div>
//   )
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'React is cool....',
      date: null,
      input: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('/message');
    const messageObj = await response.json();
    console.log("The message is: ", messageObj);
    this.setState ({
      message: messageObj.message,
      date: messageObj.date
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const response = await fetch("/message", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message: this.state.input})
    });
    const result = await response.text();
    console.log("Result is: ", result);
    if (result === "Success") {
      const nextResponse = await fetch("/message");
      const json = nextResponse.json();
      this.setState (
        {message: json.message,
      date: json.date}
      )
    }
    // const response = await fetch('/message', {method: 'POST', body: JSON.stringify(this.state.input)})
    // const result = await response.text();
    // console.log('Result is: ', result)
    // if (result === 'Success') {
    //   const newMessage = await fetch('/message')
    //   const json = nextResponse.json()
    //   this.setState({
    //     message: json.message,
    //     date: json.date
    //   })
    // }
    // this.setState({
    //   input: e.target.value
    // })
  }

  handleInputChange(e) {
    // e.preventDefault();
    this.setState({
      input: e.target.value
    })
  }

  render () {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <h3>{this.state.date}</h3>
        <form method="POST" action="/message">
          <label htmlFor="message" >Massage here:
          </label><br></br>
          <input name="message" placeholder="write a message......"></input>
          <input type="submit" value="New message"></input>
        </form>
      
        {/* // sends data to '/message'
        // Message = "Some Message Here"
        // Date = "2019-07-29"
        // Data => 'message="Some%20Message%20Here"&date="2019-07-29"'
        // Request "http://" */}

      </div>
    )
  }
}

// export default App;

//add "proxy": "http://localhost:5000" to package.json



//---- end notes ----\\




var myIcon = L.icon({
  iconUrl: './public/favicon.ico',
  iconSize: [25, 42],
  iconAnchor: [22, 94],
  popupAnchor: [-10, -90]
});

// class App extends Component {
//   state = {
//     lat: 51.505,
//     lng: -0.08,
//     zoom: 14
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng]
//     return (
//       <div className="App">
//         <Map className = "map" center={position} zoom={this.state.zoom}>
//           <TileLayer
//             attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker 
//           position={position}
//           icon={myIcon}>
//             <Popup>
//               A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//           </Marker>
//         </Map>
//       </div>
//     );
//   }

// export default App
