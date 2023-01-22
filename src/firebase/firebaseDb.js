// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_CKKt0rE65eSbFd_P2svxIv10cWQ6n88",
  authDomain: "list-page.firebaseapp.com",
  projectId: "list-page",
  storageBucket: "list-page.appspot.com",
  messagingSenderId: "902522149327",
  appId: "1:902522149327:web:2bfbd2c31a950d36311aba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)