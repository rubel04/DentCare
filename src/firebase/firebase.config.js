// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5tzcehOSY9i9nrRELjXEWdJ8AP53bKDM",
  authDomain: "dentcare-best.firebaseapp.com",
  projectId: "dentcare-best",
  storageBucket: "dentcare-best.firebasestorage.app",
  messagingSenderId: "784055365777",
  appId: "1:784055365777:web:4491d0e76d1bd0b266cf30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
