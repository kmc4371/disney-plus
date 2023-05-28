// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXm9RxlnlHXmyS2fJoZNR5pNx9lyk6QX0",
  authDomain: "react-disney-plus-app-9e1d7.firebaseapp.com",
  projectId: "react-disney-plus-app-9e1d7",
  storageBucket: "react-disney-plus-app-9e1d7.appspot.com",
  messagingSenderId: "639180831900",
  appId: "1:639180831900:web:adc59560c5cf284cf14159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app