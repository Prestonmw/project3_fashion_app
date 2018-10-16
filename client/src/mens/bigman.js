import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card } from 'reactstrap';
import "../styles/App.css";


class bigmen extends Component {
    state= {
        images: [
            "./images/bigguy1.jpg",
            "./images/bigguy2.jpg",
            "./images/bigguy3.jpg",
            "./images/bigguy4.jpg",
            "./images/bigguy5.jpg",
            "./images/bigguy6.jpg",
            "./images/bigguy7.jpg",
            "./images/bigguy8.jpg",
            "./images/bigguy9.jpg",
            "./images/bigguy10.jpg",
            "./images/bigguy11.jpg",
            "./images/bigguy12.jpg",
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
                <p className="bigmen-intro">
                     Check out these style ideas for big guys!
                </p>
        </div>
        <div className="row">
              {this.state.images.map((img) => {return <div className="col-4" id="comp2"><Card><img width="auto" src={img}/></Card></div>})}
        </div>
    </div>

        );
    }
    }
    export default withRouter(bigmen);