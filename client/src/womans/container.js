import React, { Component } from "react";
// import logo from "./logo.svg";
import "../styles/App.css";
import Example from "../home/components/card/cardBtn";



class womans extends Component {

    
    render() {
        return (
        <div className="container">
            <div className="Home">
                <div className="Home-header">
              {/* <img src={logo} className="Home-logo" alt="logo" /> */}
                     <h2>Bourgeousie</h2>
            </div>
                <p className="Womans-intro">
                     Welcome! Please choose your body-type below to get started!
                </p>
            </div>
            <div className="row">
                <div className="col-4">
                    <Example title="More to Adore" buttonText="That's Me!" btnhref="/womans" image="images/pretty_plus.jpg"/>
                </div>
                <div className="col-4">
                    <Example title="Midling Sort" buttonText="That's Me!" btnhref="/womans" image="images/medium_size.jpg"/>
                </div>
                <div className="col-4">
                    <Example title="Pretty and Petite" buttonText="That's Me!" btnhref="/womans" image="images/petite.jpg"/>
                </div>
            </div>

            
            
        </div>

        
        )
    
    }};
export default womans;