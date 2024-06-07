// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBONxN1COJTBXVTFw5ffALOGOlAUxL-9ps",
  authDomain: "admindashboardui.firebaseapp.com",
  projectId: "admindashboardui",
  storageBucket: "admindashboardui.appspot.com",
  messagingSenderId: "1070783236241",
  appId: "1:1070783236241:web:802558af77ab520e015730",
  measurementId: "G-GFCYVT29EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);