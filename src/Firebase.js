import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdfr5uV4Oa3nUP2QoR7ulf33HQ-DyOdDA",
  authDomain: "testproject-6e1f5.firebaseapp.com",
  projectId: "testproject-6e1f5",
  storageBucket: "testproject-6e1f5.appspot.com",
  messagingSenderId: "302455600166",
  appId: "1:302455600166:web:9013652bdc5c13314ba2e7",
  measurementId: "G-G93TYE71DG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth=getAuth(app)