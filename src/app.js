import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

// Finished at 04:58 (Utils directory and setup)
// User mail, pass password

export default function App() {
  const { user } = useAuthListener();
  // console.log(user);

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
      <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact
        path={ROUTES.HOME}
      >
        <Home />
      </IsUserRedirect>
    </Router>
  );
}
