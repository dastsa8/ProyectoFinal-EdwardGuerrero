import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCWHuAv9FQBjvRyAGbIMmzMuD1wAyIaXPk",
    authDomain: "tienda-edward-re.firebaseapp.com",
    projectId: "tienda-edward-re",
    storageBucket: "tienda-edward-re.firebasestorage.app",
    messagingSenderId: "362691438525",
    appId: "1:362691438525:web:61b0c0817f6751e707d4d4",
    measurementId: "G-9G7ZY5ZWNP"
};

export const app = initializeApp(firebaseConfig);
