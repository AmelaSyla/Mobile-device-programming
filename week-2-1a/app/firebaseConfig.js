// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdqYO80tNufr7aiuqbTni5Skpt4xGPFSs",
  authDomain: "authentication-d0e87.firebaseapp.com",
  projectId: "authentication-d0e87",
  storageBucket: "authentication-d0e87.appspot.com",
  messagingSenderId: "111287502091",
  appId: "1:111287502091:web:ea1ccad3d7bf59b42f8e0e",
  measurementId: "G-G3KX5HH9NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
