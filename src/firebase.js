import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

//  Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7fbXK0TJrBVrYlhR49DYISoIAFNiHcJI",
  authDomain: "budget-app-e478b.firebaseapp.com",
  projectId: "budget-app-e478b",
  storageBucket: "budget-app-e478b.appspot.com", // FIXED: Corrected storageBucket URL
  messagingSenderId: "399025109395",
  appId: "1:399025109395:web:f6bfdfd4ba5bc1dd059066",
  measurementId: "G-R04Z0Q8MRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

// Google Sign-in function
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

export { auth, signInWithGoogle, logout };
