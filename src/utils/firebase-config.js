import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
 
const firebaseConfig = {
  apiKey: "AIzaSyDyNmJpgTyssE-O_19o0lpVCoUPcOBEgMg",
  authDomain: "react-netflix-clone-21c72.firebaseapp.com",
  projectId: "react-netflix-clone-21c72",
  storageBucket: "react-netflix-clone-21c72.appspot.com",
  messagingSenderId: "631213223255",
  appId: "1:631213223255:web:e74b36b346c619aeb5a212",
  measurementId: "G-SZH212HDQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app)
