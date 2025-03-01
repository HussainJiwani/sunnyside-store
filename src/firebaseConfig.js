// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoMg8v98SYErsp-2_uMnZ5cFQA0ZK9u9Y",
  authDomain: "sunnyside-country-store-73516.firebaseapp.com",
  projectId: "sunnyside-country-store-73516",
  storageBucket: "sunnyside-country-store-73516.firebasestorage.app",
  messagingSenderId: "337034859686",
  appId: "1:337034859686:web:6e75baa2a476cd22471067",
  measurementId: "G-B9XB4D0NRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
