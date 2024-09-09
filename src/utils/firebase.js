import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDPEjMk_eJXd6d58qa2MJ7O7pCeSmqpIA8",
  authDomain: "eccomercewithreact.firebaseapp.com",
  projectId: "eccomercewithreact",
  storageBucket: "eccomercewithreact.appspot.com",
  messagingSenderId: "832542320684",
  appId: "1:832542320684:web:f4a416cebbb50627aac989",
  measurementId: "G-F8B6PWVW5F",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {
  app,
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
};
