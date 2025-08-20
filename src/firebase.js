// firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Импорт Firestore
import { getFirestore } from "firebase/firestore";

// Ваш веб-конфиг Firebase
const firebaseConfig = {
   apiKey: "AIzaSyDE-JUYyO8IfwcQTkpKSk672lNPfOWEGPo",
   authDomain: "youoffice-814d4.firebaseapp.com",
   projectId: "youoffice-814d4",
   storageBucket: "youoffice-814d4.firebasestorage.app",
   messagingSenderId: "698200688802",
   appId: "1:698200688802:web:8414e5f9f791687c98effb",
   measurementId: "G-XR17DSBWK1"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Инициализация Firestore
const db = getFirestore(app);

// Экспортируем db
export { db };