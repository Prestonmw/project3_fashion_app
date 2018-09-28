import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

$(document).ready(function(){
    
  var userTraits = [];
  var queryTraits;

  var traits = {
      gender: ["Male", "Female",],
      bodytype: ["Athletic", "Chubby","Stocky", "Fat", "Skinny","Average", "Bodybuilder"],
      skintone: ["Super Light (White)", "Light", "Olive", "Tan", "Light Brown", "Brown","Dark", "Super Dark(Black)"],
      height: ["Super Short", "Short", "Average", "Tall", "Super Tall"],
      haircolor: ["White", "Silver", "Grey", "Black", "Brown", "Blonde", "Light Brown", "Dark Brown", "Dirty Blonde", "Red", "Auburn"],  
    
  }

  function displayTraits() {
      for (var i = 0; i < traits.gender.length; i++) {
          var traitButton = $("<button>");
          traitButton.addClass("trait");
          traitButton.addClass("btn btn-lg btn-danger");
          traitButton.attr("id", traits.gender[i]);
          traitButton.text(traits.gender[i]);
          $("#genderColumn").prepend(traitButton);
      }

      for (var i = 0; i < traits.bodytype.length; i++) {
        var traitButton = $("<button>");
        traitButton.addClass("trait");
        traitButton.addClass("btn btn-lg btn-danger");
        traitButton.attr("id", traits.bodytype[i]);
        traitButton.text(traits.bodytype[i]);
        $("#bodytypeColumn").prepend(traitButton);
      }

      for (var i = 0; i < traits.skintone.length; i++) {
        var traitButton = $("<button>");
        traitButton.addClass("trait");
        traitButton.addClass("btn btn-lg btn-danger");
        traitButton.attr("id", traits.skintone[i]);
        traitButton.text(traits.skintone[i]);
        $("#skintoneColumn").prepend(traitButton);
      }
  
      for (var i = 0; i < traits.haircolor.length; i++) {
        var traitButton = $("<button>");
        traitButton.addClass("trait");
        traitButton.addClass("btn btn-lg btn-danger");
        traitButton.attr("id", traits.haircolor[i]);
        traitButton.text(traits.gender[i]);
        $("#haircolorColumn").prepend(traitButton);
      }

      for (var i = 0; i < traits.height.length; i++) {
        var traitButton = $("<button>");
        traitButton.addClass("trait");
        traitButton.addClass("btn btn-lg btn-danger");
        traitButton.attr("id", traits.height[i]);
        traitButton.text(traits.height[i]);
        $("#heightColumn").prepend(traitButton);
      }

  }

  function userInput(event) {

      var selectedTrait = event.target.id;
      var targetButton = $(event.target);
      var indexOfTrait = userTraits.indexOf(selectedTrait);

      if (indexOfTrait >= 0) {
          userTraits.splice(indexOfTrait, 1);
          console.log(userTraits);
          console.log(selectedTrait);
          targetButton.removeClass("active");
          return;
      } else {
          userTraits.push(selectedTrait);
          console.log(userTraits);
          console.log(selectedTrait);
          targetButton.addClass("active");
      }
  }