import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';


//Debería estar en un .ENV

const firebaseConfig = {
  apiKey: "AIzaSyCPYDXGqUqp_IeRUotn1xTD8NdPLBL5s1U",
  authDomain: "fir-blog-17cd0.firebaseapp.com",
  projectId: "fir-blog-17cd0",
  storageBucket: "fir-blog-17cd0.appspot.com",
  messagingSenderId: "1042997697978",
  appId: "1:1042997697978:web:5663325661cd76cb521183"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app) // Primera instancia pasamos la app que vamos a estar autorizando como param.

export const provider = new GoogleAuthProvider() // Instancia de la clase

