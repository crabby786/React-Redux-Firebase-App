import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCtdfE1v6p_fQMaoayj6D2Q5fp-3bAbMeU",
    authDomain: "poke1-c171c.firebaseapp.com",
    databaseURL: "https://poke1-c171c.firebaseio.com",
    projectId: "poke1-c171c",
    storageBucket: "poke1-c171c.appspot.com",
    messagingSenderId: "437129694666"
  };
  firebase.initializeApp(config);

  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;