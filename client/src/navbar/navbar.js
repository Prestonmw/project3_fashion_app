import React, { Component } from "react";
import "../styles/App.css";

const Navbar = props => (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="./">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./mens">Men's</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./womans">Woman's</a>
      </li>
    </ul>
    <span class="navbar-text">
    </span>
  </div>
</nav>
);

export default Navbar;