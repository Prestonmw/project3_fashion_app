import React, { Component } from "react";
// import logo from "./logo.svg";
import "../styles/App.css";
import Example from "./components/card/cardBtn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Home extends Component {
  state = {
    images: [
        "./images/man_basic1.jpg",
        "./images/woman_basic.jpg",
        "./images/Bouge_2.png"
    ]
 };
    render() {
      return (
        <div className="Home">
          <div className="Home-header">
           <img src={this.state.images[2]}/>
          </div>
          <p className="Home-intro">
            Make a Selection Below!
  
          </p>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Example title="Men's" subtitle="" text="" buttonText="Click Me" btnhref="/mens" image={this.state.images[0]} />
              </div>
              <div className="col-6">
                <Example title="Women's" subtitle="" text="" buttonText="Click Me" btnhref="/womans" image={this.state.images[1]} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Home;