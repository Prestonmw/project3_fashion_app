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
                    <Example title="More to Adore" buttonText="That's Me!" btnhref="/womans" image="https://hips.hearstapps.com/esq.h-cdn.co/assets/17/29/1500644719-hdm079917esqwinstonbox6828.jpg?resize=980:*"  />
                </div>
                <div className="col-4">
                    <Example title="Midling Sort" buttonText="That's Me!" btnhref="/womans" image="https://assets.vogue.com/photos/58917d04fb0604bf1f5c3701/master/w_1320,c_limit/date-night-dad-bodies-mark-duplass.jpg?resize=980:*" />
                </div>
                <div className="col-4">
                    <Example title="Pretty and Petite" buttonText="That's Me!" btnhref="/womans" image="https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2017/08/grey-suit-black-zip-up-white-converse-min.jpg?resize=980*" />
                </div>
            </div>

            
            
        </div>

        
        )
    
    }};
export default mens;