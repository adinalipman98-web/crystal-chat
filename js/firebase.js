// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBwZYa3t4BWGuMC1Sn-Lv1oA5nNz80MrM",
  authDomain: "crystal-chat-bbd36.firebaseapp.com",
  projectId: "crystal-chat-bbd36",
  storageBucket: "crystal-chat-bbd36.firebasestorage.app",
  messagingSenderId: "1000450014317",
  appId: "1:1000450014317:web:327d720451e27e745b5364",
  measurementId: "G-0GF8L4QC4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
