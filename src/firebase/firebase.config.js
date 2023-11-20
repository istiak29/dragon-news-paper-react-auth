// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK2oCNTB2rENHL37bYwhtBrPE0uPHkpLY",
  authDomain: "dragon-news-paper-react.firebaseapp.com",
  projectId: "dragon-news-paper-react",
  storageBucket: "dragon-news-paper-react.appspot.com",
  messagingSenderId: "1097636879561",
  appId: "1:1097636879561:web:48ceca2f1022992a120118",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;