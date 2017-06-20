import React from "react";
import { Route, Router, browserHistory } from "react-router";

import Parent from "../components/parent";
import QuoteHome from "../components/children/QuoteHome";


const Routes = (
 <Router history={browserHistory}>
    <Route path="/" component={Parent}></Route>
    <Route path="/ReactNews/" component={Parent}></Route>
  </Router>
)

module.exports = Routes;
