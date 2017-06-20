import React from "react";
import { Route, Router, browserHistory } from "react-router";

import Parent from "../components/Parent";
import QuoteHome from "../components/children/quoteHome";


const routes = (
 
    <Route path="/ReactNews/" component={Parent}>
    </Route>
  
);

export default routes;
