// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-estate-d10a9.firebaseapp.com",
  projectId: "next-estate-d10a9",
  storageBucket: "next-estate-d10a9.firebasestorage.app",
  messagingSenderId: "1003094897143",
  appId: "1:1003094897143:web:3fc4fc3272f024c7da7ef2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);