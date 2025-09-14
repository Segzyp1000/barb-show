import { initializeApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvacwaRTRGYjaqsa0taN2eWiUTblbm2vA",
  authDomain: "barb-show-aea63.firebaseapp.com",
  projectId: "barb-show-aea63",
  storageBucket: "barb-show-aea63.appspot.com",
  messagingSenderId: "1038581959607",
  appId: "1:1038581959607:web:53a7b045df235c2f61f632",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Strongly typed Firebase services
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);
