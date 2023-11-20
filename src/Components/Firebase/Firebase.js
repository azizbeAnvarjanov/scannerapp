// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLR0jDA_bwk_J20fXycJLcJFUhYdr1fzI",
    authDomain: "scannerapp-23efb.firebaseapp.com",
    projectId: "scannerapp-23efb",
    storageBucket: "scannerapp-23efb.appspot.com",
    messagingSenderId: "99569044051",
    appId: "1:99569044051:web:20b69a6353bbde0eb194a6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default getFirestore();
