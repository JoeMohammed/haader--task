// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWknNNGIb7LBnBpovHV1pq_GTJ2e5nW5E",
  authDomain: "haader-ea0dd.firebaseapp.com",
  projectId: "haader-ea0dd",
  storageBucket: "haader-ea0dd.appspot.com",
  messagingSenderId: "605267241670",
  appId: "1:605267241670:web:745f886a10e7059c2605c7",
  measurementId: "G-XKH058V6RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initail Firestore
export const db = getFirestore(app);