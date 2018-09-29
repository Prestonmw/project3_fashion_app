import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

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
        <div className="container wrapper">
      <div className="row">
          <div className="panel panel-default">
              <div className="panel-heading">
                  <span className="traitHeader">Gender</span>
              </div>
              <div className="panel-body">
                      <column className="col-md-12 text-center" id="genderColumn"></column>
              </div>
          </div>
          <div className="panel panel-default">
              <div className="panel-heading">
                      <span className="traitHeader">Body Type</span>
              </div>
              <div className="panel-body">
                      <column className="col-md-12 text-center" id="bodytypeColumn"></column>
              </div>
          </div>
          <div className="panel panel-default">
              <div className="panel-heading">
                      <span className="ingredientHeader">Skin Tone</span>
              </div>
              <div className="panel-body">
                      <column className="col-md-12 text-center" id="skintoneColumn"></column>
              </div>
          </div>
          <div className="panel panel-default">
              <div className="panel-heading">
                      <span className="ingredientHeader">Height</span>
              </div>
              <div className="panel-body">
                      <column className="col-md-12 text-center" id="heightColumn"></column>
              </div>
          </div>
          <div className="panel panel-default">
              <div className="panel-heading">
                  <span className="ingredientHeader">Hair Color</span>
              </div>
              <div className="panel-body">
                      <column className="col-md-12 text-center" id="haircolorColumn"></column>
              </div>
</div>
</div>
</div>
</div>
    
    );
  }
}

export default App;
