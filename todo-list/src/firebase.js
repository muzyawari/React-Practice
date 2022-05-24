// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtWSNwHG_iRK0lcUCEyDn9GXq9tYawPhc",
  authDomain: "todo-practice-a2c2b.firebaseapp.com",
  projectId: "todo-practice-a2c2b",
  storageBucket: "todo-practice-a2c2b.appspot.com",
  messagingSenderId: "779589403808",
  appId: "1:779589403808:web:c7e9d0180831610cf0f5c5",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
