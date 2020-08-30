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

const db = firebase.firestore();

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);
  const doc = await userRef.get();
  if (!doc.exists) {
    const { uid, email, displayName } = userAuth;
    const createdAt = new Date();
    await userRef.set({
      uid,
      email,
      displayName,
      createdAt,
      ...additionalData,
    });
  }

  return userRef;
};

export const SignInWithGoogle = () =>
  auth
    .signInWithPopup(provider)
    .then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //   var token = result.credential.accessToken;
      // The signed-in user info.
      // var user = result.user;
      //   const docRef = db.collection("users").doc(user.uid);
      // const userRef = db.collection("users").doc(user.uid);
      // const doc = await userRef.get();
      // if (!doc.exists) {
      //   await userRef.set({
      //     uid: user.uid,
      //     email: user.email,
      //     displayName: user.displayName,
      //   });
      // } else {
      //   // console.log("Document data:", doc.data());
      //   return doc.data();
      // }
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
