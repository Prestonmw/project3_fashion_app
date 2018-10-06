import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Example from "./components/card/cardBtn";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bourgeousie</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

        </p>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Example title="Men's" subtitle="World!" text="Hello again" buttonText="Click Me" image="https://cdn.shopify.com/s/files/1/0981/8178/files/editor-blue-oxford-freelancer-utility-shirt-left-hero_1024x1024.jpg?13256324731859498008" />
            </div>
            <div className="col-6">
              <Example title="Women's" subtitle="World!" text="Goodbye again" buttonText="Don't Click Me" image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1041355480.jpg?crop=1.00xw:0.752xh;0,0.00240xh&resize=980:*" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
