// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtkufQHMDBYyZHh1t0vt9Bnl-fJZZdZA0",
  authDomain: "residential-website-b2561.firebaseapp.com",
  projectId: "residential-website-b2561",
  storageBucket: "residential-website-b2561.appspot.com",
  messagingSenderId: "684341377932",
  appId: "1:684341377932:web:e321051fce481cd4c374a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);