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
           "./images/Bouge_2.png",
           "./images/womenstips.jpg"
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

            <div className="row">
                <div className="col-12">
                    <Example title="Tips" buttonText="Halp me!" btnhref="https://www.pinterest.com/christajean318/womens-style-tips/?lp=true" image={this.state.images[4]} />
                </div>                   
              </div>  

              <iframe width="100%" height="500" src="https://www.youtube.com/embed/A1Z5ES3ZIH4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              <iframe width="100%" height="500" src="https://www.youtube.com/embed/leSicM57gE4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              <iframe width="100%" height="500" src="https://www.youtube.com/embed/bpNcuh_BnsA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              <iframe width="100%" height="500" src="https://www.youtube.com/embed/UNBg3XTDz-U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              <iframe width="100%" height="500" src="https://www.youtube.com/embed/32MPtIvd9nI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>

        

        
        )
    
    }};
export default womans;