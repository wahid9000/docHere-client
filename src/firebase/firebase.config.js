// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6r13Yv2g3KviQ43T3T1vgHqc7MNKN3EU",
  authDomain: "doc-here.firebaseapp.com",
  projectId: "doc-here",
  storageBucket: "doc-here.appspot.com",
  messagingSenderId: "367531562425",
  appId: "1:367531562425:web:f45d2a88b8269a642cd268"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;