import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAK5pNIHuPqOgAAEWGDc6KfgFlNlT0xCi4",
  authDomain: "audit-bdb1d.firebaseapp.com",
  databaseURL: "https://audit-bdb1d.firebaseio.com",
  projectId: "audit-bdb1d",
  storageBucket: "audit-bdb1d.appspot.com",
  messagingSenderId: "648968004319",
  appId: "1:648968004319:web:31b1eea0abd98a65"
};            
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

// Get a reference to the database service
var database = firebase.database();


export default firebase;
