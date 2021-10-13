import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { useContent } from "../hooks";

export default function Browse() {
  const { firebase } = useContext(FirebaseContext);

  // Get series and films
  const { series } = useContent("series");
  const { films } = useContent("films");

  return (
    <div>
      <h1>Browse</h1>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </div>
  );
}
