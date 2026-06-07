import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBNjz6kChUkSY0-vP2TYel8BmQ6i1BK8U",
  authDomain: "field-data-app-a14fd.firebaseapp.com",
  projectId: "field-data-app-a14fd",
  storageBucket: "field-data-app-a14fd.firebasestorage.app",
  messagingSenderId: "402037270806",
  appId: "1:402037270806:web:ea647c5c51ebe5de644837",
  measurementId: "G-3VCRZFNCN3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy
};
