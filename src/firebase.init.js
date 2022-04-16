// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-6MX6crDZhJ2rjR5pWKJlzpzWjXEeBxs",
  authDomain: "ema-john-simple-44165.firebaseapp.com",
  projectId: "ema-john-simple-44165",
  storageBucket: "ema-john-simple-44165.appspot.com",
  messagingSenderId: "1001651163399",
  appId: "1:1001651163399:web:222724459332760a2df5a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;