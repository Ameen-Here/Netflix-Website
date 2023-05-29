// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUzxB6oXaYO8uJTV5v95iP2kE7lHepIJM",
  authDomain: "netflix-website-616cf.firebaseapp.com",
  projectId: "netflix-website-616cf",
  storageBucket: "netflix-website-616cf.appspot.com",
  messagingSenderId: "889665318509",
  appId: "1:889665318509:web:d161f3ae3d1fcf1ad91964",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
