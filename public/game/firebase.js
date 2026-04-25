// Created by Jan Ivicic © 2026

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJNXMKPGslxNOTuc2I4ThJRTThwkuGdYM",
  authDomain: "school-canteen-simulator-sk.firebaseapp.com",
  projectId: "school-canteen-simulator-sk",
  storageBucket: "school-canteen-simulator-sk.firebasestorage.app",
  messagingSenderId: "1040508716913",
  appId: "1:1040508716913:web:42275e72b7da930537d8d0",
  measurementId: "G-F7PKSPM7PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };