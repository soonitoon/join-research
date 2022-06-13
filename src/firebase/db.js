import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAuje1eBx88tPuxXoshk0sF5OjhJPHq2ig",
  authDomain: "join-study.firebaseapp.com",
  projectId: "join-study",
  storageBucket: "join-study.appspot.com",
  messagingSenderId: "1003577309856",
  appId: "1:1003577309856:web:a6f6f1b351f9d76d18a7c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
