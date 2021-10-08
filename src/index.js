import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./app";
import { GlobalStyles } from "./global-styles";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

ReactDOM.render(
  <>
    {/* Pass firebase to Context and wrap app with it */}
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
