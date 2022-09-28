import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBcYvBDvH9pYQUDkppSHTCy_W1LrRIMLSY",
  authDomain: "react-login-4d0f3.firebaseapp.com",
  projectId: "react-login-4d0f3",
  storageBucket: "react-login-4d0f3.appspot.com",
  messagingSenderId: "895567927070",
  appId: "1:895567927070:web:03811f6cfe58f46cb85b0f",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
