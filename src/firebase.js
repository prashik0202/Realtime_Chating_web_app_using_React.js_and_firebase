// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZr_Lm2sBAc8d3wbh4Xg_sL2hv5TdZZvg",
  authDomain: "real-time-chat-app-c8b9d.firebaseapp.com",
  projectId: "real-time-chat-app-c8b9d",
  storageBucket: "real-time-chat-app-c8b9d.appspot.com",
  messagingSenderId: "415893298985",
  appId: "1:415893298985:web:b71639ef3d0a09595a6138",
  measurementId: "G-EPLD6KGZ5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);