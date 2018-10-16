import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/container";
import Womans from "./womans/container";
import Mens from "./mens/container";
import Mensbig from "./mensbig/container";
import Mensmedium from "./mensmedium/container";
import Menssmall from "./menssmall/container";
import Womansbig from "./womansbig/container";
import Womansmedium from "./womansmedium/container";
import Womanssmall from "./womanssmall/container";


// import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/womans" component={Womans} />
        <Route exact path="/mens" component={Mens} />
        <Route exact path="/mensbig" component={Mensbig} />
        <Route exact path="/mensmedium" component={Mensmedium} />
        <Route exact path="/menssmall" component={Menssmall} />
        <Route exact path="/womansbig" component={Womansbig} />
        <Route exact path="/womansmedium" component={Womansmedium} />
        <Route exact path="/womanssmall" component={Womanssmall} />
      </Switch>
    </div>
  </Router>
);

export default App;
