import React, { Component } from "react";
// import logo from "./logo.svg";
import "../styles/App.css";
import StyleCard from "../common/components/card/style-card";
import Navbar from "../navbar/navbar";


class mens extends Component {
    state = {
        images: [
            "./images/big_guy.jpg",
            "./images/average1.jpg",
            "./images/tall1.jpg",
            "./images/Bouge_2.png",
            "./images/menstips.jpg"
        ]
    };
<<<<<<< HEAD
<<<<<<< HEAD
    
    render() {
        return (
    <div className="container">
        <div className="Home">
           <div className="Home-header">
              <h2>Bourgeois</h2>
                 <hr></hr>
            </div>
                <p className="Mens-intro">
                     Welcome! Please choose your body-type below to get started!
                </p>
        </div>
            <div className="row">
                <div className="col-4">
                    <Example title="Big Fellas" buttonText="That's Me!" btnhref="/bigmen" image={this.state.images[0]}  />
=======

    render() {
        return (
=======

    render() {
        return (
>>>>>>> 6100ed2f638f08ebe8b203d66cada7a6fb11d9f1
            <div className="container">
             <Navbar/>
                <div className="Home">
                    <div className="Home-header">
                        <img src={this.state.images[3]} />
                    </div>
                    <p className="Home-intro">
                        Now, please click your closest body type and we'll give you some examples of how to dress to kill.
                        </p>
<<<<<<< HEAD
>>>>>>> 6100ed2f638f08ebe8b203d66cada7a6fb11d9f1
=======
>>>>>>> 6100ed2f638f08ebe8b203d66cada7a6fb11d9f1
                </div>
                <div className="row">
                    <div className="col-4">
                        <StyleCard title="Big Fellas" buttonText="That's Me!" btnhref="/mensbig" image={this.state.images[0]} />
                    </div>
                    <div className="col-4">
                        <StyleCard title="Middle of the Road" buttonText="That's Me!" btnhref="/mensmedium" image={this.state.images[1]} />
                    </div>
                    <div className="col-4">
                        <StyleCard title="Skinny Non-fat Tall Hombre" buttonText="That's Me!" btnhref="/menssmall" image={this.state.images[2]} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <StyleCard title="Tips" buttonText="Halp me!" btnhref="https://www.artofmanliness.com/articles/101-style-tips-men/" image={this.state.images[4]} />
                    </div>                   
                </div>

               
            </div>


        )

    }
};
export default mens;