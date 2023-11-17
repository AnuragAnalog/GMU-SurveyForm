// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU1PV4BLEjNrTgwTpxP82pOHQFNQb_XMU",
  authDomain: "gmusurveyform.firebaseapp.com",
  projectId: "gmusurveyform",
  storageBucket: "gmusurveyform.appspot.com",
  messagingSenderId: "463912482388",
  appId: "1:463912482388:web:5618ba864fba4e40e95fc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const surveyCollection = collection(db, "survey");