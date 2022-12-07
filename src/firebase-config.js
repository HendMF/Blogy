// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWjIEx6IldVQgDkkv-PYrDw9LP9yXn_DM",
  authDomain: "blogy-ec159.firebaseapp.com",
  projectId: "blogy-ec159",
  storageBucket: "blogy-ec159.appspot.com",
  messagingSenderId: "785953067363",
  appId: "1:785953067363:web:a6e228395d987c5accc356",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()