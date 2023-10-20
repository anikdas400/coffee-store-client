// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGTbg3DZVM4gpAobwHFLXV4_sAJ-j9KpY",
  authDomain: "coffee-store-d6573.firebaseapp.com",
  projectId: "coffee-store-d6573",
  storageBucket: "coffee-store-d6573.appspot.com",
  messagingSenderId: "1478107702",
  appId: "1:1478107702:web:f9d4e25f7b6419071e2e97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth