import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


export const firebaseConfig = {
    apiKey: "AIzaSyAdfr5uV4Oa3nUP2QoR7ulf33HQ-DyOdDA",
    authDomain: "testproject-6e1f5.firebaseapp.com",
    projectId: "testproject-6e1f5",
    storageBucket: "testproject-6e1f5.appspot.com",
    messagingSenderId: "302455600166",
    appId: "1:302455600166:web:9013652bdc5c13314ba2e7",
    measurementId: "G-G93TYE71DG"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export {firebase}
export const firestore = firebase.firestore()