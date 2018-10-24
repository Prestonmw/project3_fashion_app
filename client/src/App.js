import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/container";
import Womans from "./womans/container";
import Mens from "./mens/container";
<<<<<<< HEAD
import Bigmen from "./mens/bigman";
=======
import StylePage from "./common/style-page";


>>>>>>> 6100ed2f638f08ebe8b203d66cada7a6fb11d9f1
// import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/womans" component={Womans} />
        <Route exact path="/mens" component={Mens} />
<<<<<<< HEAD
        <Route exact path="/bigmen" component={Bigmen} />
=======
        <Route exact path="/mensbig" render={(props) => <StylePage { ...props } category="mensbig"/>}  />
        <Route exact path="/mensmedium" render={(props) => <StylePage { ...props } category="mensmedium"/>}  />
        <Route exact path="/menssmall" render={(props) => <StylePage { ...props } category="menssmall"/>}  />
        <Route exact path="/womansbig" render={(props) => <StylePage { ...props } category="womansbig"/>}  />
        <Route exact path="/womansmedium" render={(props) => <StylePage { ...props } category="womansmedium"/>}  />
        <Route exact path="/womanssmall" render={(props) => <StylePage { ...props } category="womanssmall"/>}  />
>>>>>>> 6100ed2f638f08ebe8b203d66cada7a6fb11d9f1
      </Switch>
    </div>
  </Router>
);

export default App;
