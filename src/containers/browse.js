import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import SelectProfileContainer from "./profiles";
import { Header, Loading } from "../components";

export default function BrowseContainer({ slides }) {
  // Store current user profile
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    // console.log(profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  //   <button onClick={() => firebase.auth().signOut()}>Sign out</button>

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src={"joker1"}>
        <p>Hello</p>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
