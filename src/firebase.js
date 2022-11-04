// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMBdTLG6IVHFpzmFEkysHVHISvnxqXyps",
  authDomain: "todo-app-26bd1.firebaseapp.com",
  projectId: "todo-app-26bd1",
  storageBucket: "todo-app-26bd1.appspot.com",
  messagingSenderId: "941732709062",
  appId: "1:941732709062:web:57f242f9ec5b369bbb0dc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)