// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxPU2-vo318tLGRzlWXYER_PdHGRYacdM",
  authDomain: "dani-3f761.firebaseapp.com",
  projectId: "dani-3f761",
  storageBucket: "dani-3f761.appspot.com",
  messagingSenderId: "584236564064",
  appId: "1:584236564064:web:dc9f3ce52be48884534d05",
  measurementId: "G-NXBQC3J0N2",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);
firebase.initializeApp(firebaseConfig);
