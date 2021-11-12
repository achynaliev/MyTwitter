// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJznPkrzXHHkl0gca3cVYVt8NXaiS5mZc",
  authDomain: "pair-project-ce875.firebaseapp.com",
  projectId: "pair-project-ce875",
  storageBucket: "pair-project-ce875.appspot.com",
  messagingSenderId: "167831375338",
  appId: "1:167831375338:web:36f1ff552a747f7c1af693",
  measurementId: "G-KHEK1DF3YL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const fireDB = getFirestore(app);
const analytics = getAnalytics(app);
