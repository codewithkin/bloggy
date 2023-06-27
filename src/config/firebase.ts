import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore, collection, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcqo8Zy2iXnphZKwrZDTXnIP4MsmkO-eA",
  authDomain: "bloggy-daa80.firebaseapp.com",
  projectId: "bloggy-daa80",
  storageBucket: "bloggy-daa80.appspot.com",
  messagingSenderId: "45764972308",
  appId: "1:45764972308:web:5f1117f35e62aadbe4fc01",
  measurementId: "G-JW3Y7BD99P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Firestore ref
export const db: Firestore = getFirestore();

//collection ref
export const collectionRef = collection(db, "blogs")