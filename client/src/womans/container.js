import React, { Component } from "react";
// import logo from "./logo.svg";
import "../styles/App.css";
import Example from "../home/components/card/cardBtn";
import Navbar from "../navbar/navbar";



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
        <Navbar/>
            <div className="Home">
                <div className="Home-header">
                        <img src={this.state.images[3]} />
                    </div>
                <p className="Home-intro">
                Now, please click your closest body type and we'll give you some examples of how to dress to kill.
                </p>
            </div>
            <div className="row">
                <div className="col-4">
                    <Example title="More to Adore" buttonText="That's Me!" btnhref="/womansbig" image={this.state.images[0]}/>
                </div>
                <div className="col-4">
                    <Example title="Midling Sort" buttonText="That's Me!" btnhref="/womansmedium" image={this.state.images[1]}/>
                </div>
                <div className="col-4">
                    <Example title="Pretty and Petite" buttonText="That's Me!" btnhref="/womanssmall" image={this.state.images[2]}/>
                </div>
            </div>                  
        </div>

        
        )
    
    }};
export default womans;