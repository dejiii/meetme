import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARRwQE-LPWOiUwn17nESvFmIWSHMSJ4Y8",
  authDomain: "meetme-e1c6c.firebaseapp.com",
  databaseURL: "https://meetme-e1c6c-default-rtdb.firebaseio.com",
  projectId: "meetme-e1c6c",
  storageBucket: "meetme-e1c6c.appspot.com",
  messagingSenderId: "518031462238",
  appId: "1:518031462238:web:e2699127547e3122e389cf",
  measurementId: "G-9839E0WLWC",
};

const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase);
