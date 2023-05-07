import firebase from 'firebase/compat/app';
import { getAuth ,GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth";
// import 'firebase/compat/database';
// import firebase from "";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDp1z0AwGhjwkZbZHdksg1vQ3NmPlfvRgo",
    authDomain: "event-app-22d17.firebaseapp.com",
    databaseURL: "https://event-app-22d17-default-rtdb.firebaseio.com",
    projectId: "event-app-22d17",
    storageBucket: "event-app-22d17.appspot.com",
    messagingSenderId: "849200778859",
    appId: "1:849200778859:web:ef5b98c79bf69ca0632b2e"
};

// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(db);
export const googleprovider = new GoogleAuthProvider();
export const facebookprovider = new FacebookAuthProvider();