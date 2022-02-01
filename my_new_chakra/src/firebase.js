// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOyLlCSaqGbdS16CBJS7OUdVBTFcmI6_8",
  authDomain: "database-get-9cfd0.firebaseapp.com",
  projectId: "database-get-9cfd0",
  storageBucket: "database-get-9cfd0.appspot.com",
  messagingSenderId: "361749017257",
  appId: "1:361749017257:web:1d421bfad71988fe0e2fb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default getFirestore();