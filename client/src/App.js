import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./src/home/container";
import Womans from "./src/womans/container";
import Mens from "./src/mens/container";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/womans" component={Womans} />
        <Route exact path="/mens" component={Mens} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
