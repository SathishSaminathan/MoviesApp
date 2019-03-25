import firebase from '@firebase/app';
import "firebase/auth";
import "firebase/database";

var config = {
  apiKey: "AIzaSyA0rwXtalafLAF5cwRnET9yF-YXdaDKMv8",
  authDomain: "moviesapp-b23f9.firebaseapp.com",
  databaseURL: "https://moviesapp-b23f9.firebaseio.com",
  projectId: "moviesapp-b23f9",
  storageBucket: "moviesapp-b23f9.appspot.com",
  messagingSenderId: "523492720261"
};

firebase.initializeApp(config);

export default firebase;
