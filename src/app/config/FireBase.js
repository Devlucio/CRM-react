import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
 
// TODO: Adicionar SDKs para produtos Firebase que você deseja usar
// https://firebase.google.com/docs/web/setup#available-libraries

// A configuração do Firebase do seu aplicativo da web
const firebaseConfig = {
  apiKey: "AIzaSyBIHb0OoSOScxt-EvyS7g_c-hL7rg9ri3M",
  authDomain: "crm-tera-e2b7d.firebaseapp.com",
  projectId: "crm-tera-e2b7d",
  storageBucket: "crm-tera-e2b7d.appspot.com",
  messagingSenderId: "543090833282",
  appId: "1:543090833282:web:30098a365951bf15b1c19b"
};
  
// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);

