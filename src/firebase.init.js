// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFuriVTrg5GJqBPSo3M9-6J1NbS8GOBDA",
  authDomain: "your-doctor-e38b1.firebaseapp.com",
  projectId: "your-doctor-e38b1",
  storageBucket: "your-doctor-e38b1.appspot.com",
  messagingSenderId: "1016783033049",
  appId: "1:1016783033049:web:78af16724d51103e7024c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;