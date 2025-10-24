// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3dKDQA4o3hx4qMcBd8eZX4c1o7hnD-To",
  authDomain: "week7-lokhin.firebaseapp.com",
  projectId: "week7-lokhin",
  storageBucket: "week7-lokhin.firebasestorage.app",
  messagingSenderId: "434042942040",
  appId: "1:434042942040:web:16b851bc917d3cba70902d"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);