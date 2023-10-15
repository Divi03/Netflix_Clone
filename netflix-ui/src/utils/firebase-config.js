// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBlT-qA4whujf_FaoBFDtVo3Kj475J71Q",
  authDomain: "react-netflix-clone-85a9c.firebaseapp.com",
  projectId: "react-netflix-clone-85a9c",
  storageBucket: "react-netflix-clone-85a9c.appspot.com",
  messagingSenderId: "721100316374",
  appId: "1:721100316374:web:1c6d7c863901a542b8b377",
  measurementId: "G-YTVZK9L23L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app)