// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSM1tVVXXY3kJasaymNI9juIhXJ9YkFhs",
  authDomain: "clone-12152.firebaseapp.com",
  projectId: "clone-12152",
  storageBucket: "clone-12152.appspot.com",
  messagingSenderId: "333009278094",
  appId: "1:333009278094:web:37e26a15ef910ac99ee5df",
  measurementId: "G-ZLT4FLTGNL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};