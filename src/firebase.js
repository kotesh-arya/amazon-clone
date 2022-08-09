import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBxSQB8Yos3PFb7resaUvRRrR-gxrfEaQI",
  authDomain: "clone-v2-63b90.firebaseapp.com",
  projectId: "clone-v2-63b90",
  storageBucket: "clone-v2-63b90.appspot.com",
  messagingSenderId: "415137377385",
  appId: "1:415137377385:web:eddb564122bd3c53f906f8",
  measurementId: "G-576934ZB1Q",
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
