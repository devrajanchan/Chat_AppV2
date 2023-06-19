// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSvrnQfiSp7XIkyNLrlP_X1vj9AFl23ME",
  authDomain: "chat-9c43a.firebaseapp.com",
  projectId: "chat-9c43a",
  storageBucket: "chat-9c43a.appspot.com",
  messagingSenderId: "30056309572",
  appId: "1:30056309572:web:b5b52e319f771e81b6ad11",
  measurementId: "G-PPQSXHK7FR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
