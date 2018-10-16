import React, { Component } from "react";
// import logo from "./logo.svg";
import "../styles/App.css";
import Example from "../home/components/card/cardBtn";
import Navbar from "../navbar/navbar";


class mens extends Component {
    state = {
        images: [
            "./images/big_guy.jpg",
            "./images/average1.jpg",
            "./images/tall1.jpg",
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
                        <Example title="Big Fellas" buttonText="That's Me!" btnhref="/mensbig" image={this.state.images[0]} />
                    </div>
                    <div className="col-4">
                        <Example title="Middle of the Road" buttonText="That's Me!" btnhref="/mensmedium" image={this.state.images[1]} />
                    </div>
                    <div className="col-4">
                        <Example title="Skinny Non-fat Tall Hombre" buttonText="That's Me!" btnhref="/menssmall" image={this.state.images[2]} />
                    </div>
                </div>



            </div>


        )

    }
};
export default mens;