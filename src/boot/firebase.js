import firebase from "firebase";

const firebaseConfig = {
    apiKey: "xxxxxxxxxxx",
    authDomain: "xxxxxxxxxx",
    projectId: "xxxxxxxxxx",
    storageBucket: "xxxxxxxx",
    messagingSenderId: "xxxxxxxxx",
    appId: "xxxxxxx"
  };
  firebase.initializeApp(firebaseConfig);

export default firebase
