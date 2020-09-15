import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo1bep2rlUcAcrRt3Le2UMkEeKjpVgb5M",
  authDomain: "gina-template.firebaseapp.com",
  databaseURL: "https://gina-template.firebaseio.com",
  projectId: "gina-template",
  storageBucket: "gina-template.appspot.com",
  messagingSenderId: "815418014570",
  appId: "1:815418014570:web:114dd2db47020cf3ab8313",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
