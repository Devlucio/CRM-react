import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyA5d-qZVrZ78c7Q3eAKzz67idc_e2Ez5YU",
  authDomain: "crm-tera-c5466.firebaseapp.com",
  projectId: "crm-tera-c5466",
  storageBucket: "crm-tera-c5466.appspot.com",
  messagingSenderId: "487246481779",
  appId: "1:487246481779:web:cc4f32fbb8faf570061d06"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

// Inicializa o Cloud Firestore e obtém uma referência ao serviço
export const db = firebase.firestore();
