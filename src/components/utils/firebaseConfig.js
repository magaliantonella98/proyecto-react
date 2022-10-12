// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWpO4dgHcGfUbGEnRzwBNpQUlrG3o5hrc",
  authDomain: "saturn-a9ca0.firebaseapp.com",
  projectId: "saturn-a9ca0",
  storageBucket: "saturn-a9ca0.appspot.com",
  messagingSenderId: "919432937320",
  appId: "1:919432937320:web:8c44902b81ff7b2829e0dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);