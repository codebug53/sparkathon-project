import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCB-ZoEadQlqyrROHh7-wBf8YtEK4Dytk",
  authDomain: "mandi-watch-sparkathon.firebaseapp.com",
  projectId: "mandi-watch-sparkathon",
  storageBucket: "mandi-watch-sparkathon.firebasestorage.app",
  messagingSenderId: "49260303491",
  appId: "1:49260303491:web:b8b29e1e9fb5cba67477b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to sign in users
export const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// Function to handle authentication state
export const onAuthStateChanged = (callback) => {
    auth.onAuthStateChanged(callback);
};