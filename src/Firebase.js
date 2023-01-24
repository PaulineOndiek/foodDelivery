// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

//firestore
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAltt7ZXyezHI9C8KEvUyNTdKqbw4wavVY",
  authDomain: "fooddelivery-9dd9f.firebaseapp.com",
  projectId: "fooddelivery-9dd9f",
  storageBucket: "fooddelivery-9dd9f.appspot.com",
  messagingSenderId: "1079948198150",
  appId: "1:1079948198150:web:b9d8c00140a7e373499e87",
  measurementId: "G-4VGKNQ8LV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);



export const auth=getAuth(app)