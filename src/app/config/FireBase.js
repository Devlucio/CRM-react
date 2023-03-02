import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyBIHb0OoSOScxt-EvyS7g_c-hL7rg9ri3M",
  authDomain: "crm-tera-e2b7d.firebaseapp.com",
  projectId: "crm-tera-e2b7d",
  storageBucket: "crm-tera-e2b7d.appspot.com",
  messagingSenderId: "543090833282",
  appId: "1:543090833282:web:30098a365951bf15b1c19b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
