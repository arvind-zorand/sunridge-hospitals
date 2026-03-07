// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBTJ_ySW27vN5T-H8gGMjFalOH9M9ZYvgw",
  authDomain: "sunridge-979a0.firebaseapp.com",
  projectId: "sunridge-979a0",
  storageBucket: "sunridge-979a0.firebasestorage.app",
  messagingSenderId: "753166064974",
  appId: "1:753166064974:web:0c02c5a200c6142412521f",
  measurementId: "G-5VLS1ZQ47K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
