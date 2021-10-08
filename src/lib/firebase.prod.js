// Added compat to imports so that firebase works as it did in version 8
import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAnUtZYvwAhM2hpCpfqX8-7kE76VMrju0Q",
  authDomain: "netflix-clone-f0f06.firebaseapp.com",
  projectId: "netflix-clone-f0f06",
  storageBucket: "netflix-clone-f0f06.appspot.com",
  messagingSenderId: "410183410692",
  appId: "1:410183410692:web:a99a3a613af66536a7c151",
};

const firebase = Firebase.initializeApp(config);

// If you uncomment this you will seed the database again and you will get duplicate values!
// Only use this when you set up firebase for the first time, after seeding is done immediately uncomment this line or remove it completely
// seedDatabase(firebase);

export { firebase };
