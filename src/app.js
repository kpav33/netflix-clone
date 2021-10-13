import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect } from "./helpers/routes";

// Finished at 04:01 (SignUp Page)

export default function App() {
  const user = false;

  return (
    // App routing
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact
        path={ROUTES.SIGN_IN}
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact
        path={ROUTES.SIGN_UP}
      >
        <Signup />
      </IsUserRedirect>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
