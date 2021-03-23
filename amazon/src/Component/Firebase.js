
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnBS7msluPJ4KyYXdNYt1SeY2ucRfaMlQ",
    authDomain: "clone-98571.firebaseapp.com",
    projectId: "clone-98571",
    storageBucket: "clone-98571.appspot.com",
    messagingSenderId: "206167890857",
    appId: "1:206167890857:web:ac1c525b70c95e41e442b8",
    measurementId: "G-PHTZ2LRD77"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };