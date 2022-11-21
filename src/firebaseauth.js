// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaCks0E8T0b9OA9a82HNmH2S0eOAmulRA",
  authDomain: "cryptoyiled.firebaseapp.com",
  projectId: "cryptoyiled",
  storageBucket: "cryptoyiled.appspot.com",
  messagingSenderId: "268390954583",
  appId: "1:268390954583:web:c1d91c15eccfa7aafc1512",
  measurementId: "G-S6KF3XY2V7"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);