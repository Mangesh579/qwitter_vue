import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxZQmHsiLQYrmKeuQ9uCNtyBakcUmZxY4",
  authDomain: "qwitter-b2cb0.firebaseapp.com",
  projectId: "qwitter-b2cb0",
  storageBucket: "qwitter-b2cb0.appspot.com",
  messagingSenderId: "83899675053",
  appId: "1:83899675053:web:58c7e3f685550c7f583124",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db;
