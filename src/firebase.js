// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQNKivznTVqUrmZgWFSk-XRLWq1BUw3wQ",
  authDomain: "shoskaskippahacking.firebaseapp.com",
  projectId: "shoskaskippahacking",
  storageBucket: "shoskaskippahacking.appspot.com",
  messagingSenderId: "714348989476",
  appId: "1:714348989476:web:01bc1ee41e7437be799cb1",
  measurementId: "G-1BDHFMLGH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };