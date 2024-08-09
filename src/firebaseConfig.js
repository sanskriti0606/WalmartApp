// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //Paste your firebase credentials in the given keys
  // apiKey: "AIzaSyCZWJizLoc5iDDhd-Daj2HLj25huuCyTF0",
  // authDomain: "walmartapp-f428a.firebaseapp.com",
  // databaseURL: "https://walmartapp-f428a-default-rtdb.firebaseio.com",
  // projectId: "walmartapp-f428a",
  // storageBucket: "walmartapp-f428a.appspot.com",
  // messagingSenderId: "318708647404",
  // appId: "1:318708647404:web:0508014a6e624d2bbcecc9",
  // measurementId: "G-0JGRPC7ECW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
