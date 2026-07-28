// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdkSQHzd1WaDG9-s-8MPzdOw6bBuo7lDM",
  authDomain: "website-cms-225af.firebaseapp.com",
  projectId: "website-cms-225af",
  storageBucket: "website-cms-225af.firebasestorage.app",
  messagingSenderId: "469583077647",
  appId: "1:469583077647:web:60abb2af775b6eb3929e7a",
  measurementId: "G-DRCZTM0EXT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);