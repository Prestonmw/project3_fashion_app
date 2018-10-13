import React, { Component } from "react";
// import logo from "./logo.svg";
import "../styles/App.css";
import Example from "../home/components/card/cardBtn";



class womans extends Component {
    state = {
       images: [
           "./images/pretty_plus.jpg",
           "./images/medium_size.jpg",
           "./images/petite.jpg",
           "./images/Bouge_2.png"
       ]
    };
    
    render() {
        return (
        <div className="container">
            <div className="Home">
                <div className="Home-header">
                        <img src={this.state.images[3]} />
                    </div>
                <p className="Womans-intro">
                     Welcome! Please choose your body-type below to get started!
                </p>
            </div>
            <div className="row">
                <div className="col-4">
                    <Example title="More to Adore" buttonText="That's Me!" btnhref="/womans" image={this.state.images[0]}/>
                </div>
                <div className="col-4">
                    <Example title="Midling Sort" buttonText="That's Me!" btnhref="/womans" image={this.state.images[1]}/>
                </div>
                <div className="col-4">
                    <Example title="Pretty and Petite" buttonText="That's Me!" btnhref="/womans" image={this.state.images[2]}/>
                </div>
            </div>

            
            
        </div>

        
        )
    
    }};
export default womans;