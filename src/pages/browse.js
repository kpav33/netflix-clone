import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

export default function Browse() {
  const { firebase } = useContext(FirebaseContext);

  // Get series and films
  const { series } = useContent("series");
  const { films } = useContent("films");
  // console.log(series, films);

  // Get series, films data with genre titles to use for slides
  const slides = selectionFilter({ series, films });
  console.log(slides);

  return (
    <div>
      <h1>Browse</h1>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </div>
  );
}
