import React, { Component } from "react";
// import logo from "./logo.svg";
import "../styles/App.css";
import StyleCard from "../common/components/card/style-card";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../navbar/navbar";

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
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="container">
        <div className="Home">
            <div className="Home-header">
              <h2>Bourgeois</h2>
                  <hr></hr>
            </div>
              <p className="Home-intro">
                Make a Selection Below!
              </p>
=======
=======
>>>>>>> 6100ed2f638f08ebe8b203d66cada7a6fb11d9f1
        <div className="container">
        <Navbar/>
        <div className="Home">
          <div className="Home-header">
           <img src={this.state.images[2]}/>
          </div>
          <div className="row">
          <div className="col-12">
          <p className="Home-intro">
          Welcome! Do you aspire to improve your look and further your lot in life? Click the picture that most resembles you to learn how!
          </p>
          </div>
          </div>
          
          <div className="container">
>>>>>>> 6100ed2f638f08ebe8b203d66cada7a6fb11d9f1
            <div className="row">
              <div className="col-6">
                <StyleCard title="Men's" subtitle="" text="" buttonText="Click Me" btnhref="/mens" image={this.state.images[0]} />
              </div>
              <div className="col-6">
                <StyleCard title="Women's" subtitle="" text="" buttonText="Click Me" btnhref="/womans" image={this.state.images[1]} />
              </div>
            </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
      </div>
=======
        </div>
>>>>>>> 6100ed2f638f08ebe8b203d66cada7a6fb11d9f1
=======
        </div>
>>>>>>> 6100ed2f638f08ebe8b203d66cada7a6fb11d9f1
      );
    }
  }
  
  export default Home;