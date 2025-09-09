// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Добавлен импорт getAuth

const firebaseConfig = {
   apiKey: "AIzaSyDE-JUYyO8IfwcQTkpKSk672lNPfOWEGPo",
   authDomain: "youoffice-814d4.firebaseapp.com",
   projectId: "youoffice-814d4",
   storageBucket: "youoffice-814d4.firebasestorage.app",
   messagingSenderId: "698200688802",
   appId: "1:698200688802:web:8414e5f9f791687c98effb",
   measurementId: "G-XR17DSBWK1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app); // Правильная инициализация auth

export { db, auth };