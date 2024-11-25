import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBZQXxGkdYY3mCPqRF0McCmaq6VSLbeFik",
    authDomain: "reactprj-bb14d.firebaseapp.com",
    projectId: "reactprj-bb14d",
    storageBucket: "reactprj-bb14d.firebasestorage.app",
    messagingSenderId: "133665237274",
    appId: "1:133665237274:web:1b756ee1c630718f2824a3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
