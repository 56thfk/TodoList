
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8vjtx5cpuTybDRTRlC4c1t2fhGpACWGk",
  authDomain: "todolist-3ea19.firebaseapp.com",
  projectId: "todolist-3ea19",
  storageBucket: "todolist-3ea19.appspot.com",
  messagingSenderId: "1060606478998",
  appId: "1:1060606478998:web:35363a0a434b630ee7d0b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app,{
    experimentalForceLongPolling: true,
  })
  
export {db}