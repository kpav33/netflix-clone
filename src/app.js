import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./constants/routes";

// Finished at 04:01 (SignUp Page)

export default function App() {
  return (
    // App routing
    <Router>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <Signin />
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
