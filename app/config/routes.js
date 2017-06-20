import React from "react";
import { Route, Router, browserHistory } from "react-router";

import Parent from "../components/Parent";
import QuoteHome from "../components/children/QuoteHome";


const routes = (
 
    <Route path="/" component={Parent}>
    </Route>
    
  
);

export default routes;
