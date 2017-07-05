import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import BootstrapNavBar from './BootstrapNavBar'
import Home from './Home'
import About from './About'
import Atlanta from './Atlanta'
import Images from './Images'
import MayorMessage from './MayorMessage'



var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

console.log(atlImages)

class App extends Component {
  render() {


    return (


      <Router>
        <div className = "container">
          <BootstrapNavBar />
          <div className="container main">
            <h1>Atlanta</h1>
            <Route path="/" component={Home} /> 
            <Route path="/one" component={About} /> 
            <Route path="/two" component={Atlanta} /> 
            <Route path="/three" render={()=>
              (<Images images = {atlImages}/>
              )} /> 

            <Route path="/four" component={MayorMessage} /> 
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

 // 


  //    <Route exact path={match.url} render={() => (
  //     <h3>Please select a topic.</h3>
  //   )}/>
  // </div>



