// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import {getAuth, GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe0zBY3pd1-CYdFiVpkP23bioJ7FBtNpk",
  authDomain: "shopcart-54aef.firebaseapp.com",
  projectId: "shopcart-54aef",
  storageBucket: "shopcart-54aef.appspot.com",
  messagingSenderId: "895068096053",
  appId: "1:895068096053:web:3e7d91d2e640c4a350537c",
  measurementId: "G-JQTLTZEYGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export {app, auth,provider};


