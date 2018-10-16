import React, { Component } from "react";
// import logo from "./logo.svg";
import "../styles/App.css";
import Example from "../home/components/card/cardBtn";
import API from "../utils/API";
import Navbar from "../navbar/navbar";

class Menssmall extends Component {

    state = {
        pins: [],
        id: "",
        images: [
            "./images/Bouge_2.png"
        ]
    };

    componentDidMount() {
        this.loadPins();
    };

    loadPins = () => {
        API.getPinCat("menssmall")
            .then(res => {
                if (res.data) {
                    console.log("hey");
                    this.setState({
                        pins: res.data
                    });
                }
            })
            .catch(err => console.log(err));
    };

    deletePins = id => {
        API.deletePins(id)
            .then(res => this.loadPins())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
            <Navbar/>
                <div className="Home">
                    <div className="Home-header">
                        <img src={this.state.images[0]} />
                    </div>
                    <p className="Home-intro">
                        Check out these options!
                    </p>
                </div>
                <div className="row">
                    <div className="col-4">
                        {this.state.pins.map(pin =>
                            <Example
                                key={Math.random().toString()}
                                title={pin.title}
                                buttonText=""
                                btnhref=""
                                image={pin.image_URL}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
};
export default Menssmall;