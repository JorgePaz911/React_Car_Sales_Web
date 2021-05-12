import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import UploadCar from "./UploadCar";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/uploadcar" exact component={UploadCar} />
      </Switch>
    </Router>
  );
}

export default Routing;
