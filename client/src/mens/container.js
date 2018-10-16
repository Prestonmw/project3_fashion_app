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
            "./images/Bouge_2.png",
            "./images/menstips.jpg"
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

                <div className="row">
                    <div className="col-12">
                        <Example title="Tips" buttonText="Halp me!" btnhref="https://www.artofmanliness.com/articles/101-style-tips-men/" image={this.state.images[4]} />
                    </div>                   
                </div>

                <iframe width="100%" height="500" src="https://www.youtube.com/embed/aCyY7AueuhE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/FiAubtXLnFs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/pUh9A41Qz10" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/8lLKig_X3ZQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/3vBVwqLqe0o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>


        )

    }
};
export default mens;