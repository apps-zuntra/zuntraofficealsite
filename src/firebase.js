// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU8sSlwurseAdbmmZhvB4SlKneHgeJn9I",
  authDomain: "zuntra-offi.firebaseapp.com",
  projectId: "zuntra-offi",
  storageBucket: "zuntra-offi.firebasestorage.app",
  messagingSenderId: "751048308194",
  appId: "1:751048308194:web:30686ad2e8fb433021f5bb",
  measurementId: "G-67Y34F5WTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { app, analytics, storage };
