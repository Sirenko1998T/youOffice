// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDE-JUYyO8IfwcQTkpKSk672lNPfOWEGPo",
   authDomain: "youoffice-814d4.firebaseapp.com",
   projectId: "youoffice-814d4",
   storageBucket: "youoffice-814d4.firebasestorage.app",
   messagingSenderId: "698200688802",
   appId: "1:698200688802:web:8414e5f9f791687c98effb",
   measurementId: "G-XR17DSBWK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);