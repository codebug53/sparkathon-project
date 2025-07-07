import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCB-ZoEadQlqyrROHh7-wBf8YtEK4Dytk",
  authDomain: "mandi-watch-sparkathon.firebaseapp.com",
  projectId: "mandi-watch-sparkathon",
  storageBucket: "mandi-watch-sparkathon.firebasestorage.app",
  messagingSenderId: "49260303491",
  appId: "1:49260303491:web:b8b29e1e9fb5cba67477b6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChanged = (callback) => {
    auth.onAuthStateChanged(callback);
};