import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrF6M8iuxyI9EYCaw6zZ0nxNtljQrYPNE",
  authDomain: "reality-loops-f0dad.firebaseapp.com",
  projectId: "reality-loops-f0dad",
  storageBucket: "reality-loops-f0dad.firebasestorage.app",
  messagingSenderId: "624414678512",
  appId: "1:624414678512:web:af7c470a164bf27a135135",
  measurementId: "G-1V0XB1SFG9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);

// Initialize Analytics conditionally (only in browser environment)
let analytics = null;
if (typeof window !== 'undefined') {
  // getAnalytics can only be called in browser environment
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.error("Analytics failed to initialize:", error);
  }
}

export { app, auth, analytics };
