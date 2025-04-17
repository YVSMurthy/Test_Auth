
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAW5RWqxS-Lb6ueUKO2A_EcXfwfXM7xm20",
  authDomain: "first-project-26515.firebaseapp.com",
  projectId: "first-project-26515",
  storageBucket: "first-project-26515.firebasestorage.app",
  messagingSenderId: "973745709437",
  appId: "1:973745709437:web:3719697f1bb53e305e2c14",
  measurementId: "G-PXVW3XSF0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

export {auth, googleProvider};