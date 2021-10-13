import React from "react";
import { Route, Redirect } from "react-router-dom";

// Custom Route that redirect users accordingly to whether they are logged in or not
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    // Spread the rest of props on Route (exact, path)
    // If user is false the children will be the Sign in component page
    // If user is true, redirect them to loggedInPath
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }

        return null;
      }}
    />
  );
}

// Protected route
export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      // Use location for tracking where user was
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect to={{ pathname: "signin", state: { from: location } }} />
          );
        }

        return null;
      }}
    />
  );
}
