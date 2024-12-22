import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBBfgrLkjie4HcSUtCk6s4obW2-kbFfm88",
    authDomain: "my-bookstore-6406260.firebaseapp.com",
    projectId: "my-bookstore-6406260",
    storageBucket: "my-bookstore-6406260.firebasestorage.app",
    messagingSenderId: "775745094833",
    appId: "1:775745094833:web:a455c965c440ff32d98e90"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);