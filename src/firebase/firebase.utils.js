import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDb8iWHLR9IxkIRHnIpaZoVqzGgdDuv7Sw",
  authDomain: "crwn-db-2597.firebaseapp.com",
  databaseURL: "https://crwn-db-2597.firebaseio.com",
  projectId: "crwn-db-2597",
  storageBucket: "crwn-db-2597.appspot.com",
  messagingSenderId: "296963883749",
  appId: "1:296963883749:web:9d719caa069b0e3218ca0c",
  measurementId: "G-275CS5P50T",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const SignInWithGoogle = () =>
  auth
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      console.log(token);
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   // The email of the user's account used.
      //   var email = error.email;
      //   // The firebase.auth.AuthCredential type that was used.
      //   var credential = error.credential;
      // ...
    });

export default firebase;
