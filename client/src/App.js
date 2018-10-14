import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/container";
import Womans from "./womans/container";
import Mens from "./mens/container";
import Mensbig from "./mensbig/container";

// import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/womans" component={Womans} />
        <Route exact path="/mens" component={Mens} />
        <Route exact path="/mensbig" component={Mensbig} />
      </Switch>
    </div>
  </Router>
);

export default App;
