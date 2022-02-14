import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDu4zRTEhD0Bylr9ie6pwAi75hfzyH_3p0",
    authDomain: "kinwa-3a7d9.firebaseapp.com",
    projectId: "kinwa-3a7d9",
    storageBucket: "kinwa-3a7d9.appspot.com",
    messagingSenderId: "630331041731",
    appId: "1:630331041731:web:ed5e5556edcec1e1aa7f76"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);