import React, { Component } from "react";
// import logo from "./logo.svg";
import "../styles/App.css";
import Example from "../home/components/card/cardBtn";



class mens extends Component {
    state = {
       images: [
           "./images/big_guy.jpg",
           "./images/average1.jpg",
           "./images/tall1.jpg"
       ]
    };
    
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
                </div>
                <div className="col-4">
                    <Example title="Middle of the Road" buttonText="That's Me!" btnhref="/mens" image={this.state.images[1]} />
                </div>
                <div className="col-4">
                    <Example title="Skinny Non-fat Tall Hombre" buttonText="That's Me!" btnhref="/mens" image={this.state.images[2]} />
                </div>
            </div>

            
            
        </div>

        
        )
    
    }};
export default mens;