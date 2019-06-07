import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
  // copy and paste your firebase credential here
  apiKey: "AIzaSyAaDJoefmVpYCOxGpszhSAO2YTEcyYz35M",
  authDomain: "dg-book-nackend.firebaseapp.com",
  databaseURL: "https://dg-book-nackend.firebaseio.com",
  projectId: "dg-book-nackend",
  storageBucket: "gs://dg-book-nackend.appspot.com",
  messagingSenderId: "335779349775"
});

const auth = firebase.auth();
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { auth, db, storage };

