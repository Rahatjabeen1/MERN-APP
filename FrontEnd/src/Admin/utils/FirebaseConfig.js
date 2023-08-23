// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDLWBZClS5puEbOCiW3bAeD5_8BU3fO6JI",
  authDomain: "mern-app-acc1a.firebaseapp.com",
  projectId: "mern-app-acc1a",
  storageBucket: "mern-app-acc1a.appspot.com",
  messagingSenderId: "728417033895",
  appId: "1:728417033895:web:5db7e42be9123d8ff0c582",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);