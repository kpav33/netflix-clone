import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import SelectProfileContainer from "./profiles";

export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  return (
    <div>
      <SelectProfileContainer user={user} setProfile={setProfile} />
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </div>
  );
}
