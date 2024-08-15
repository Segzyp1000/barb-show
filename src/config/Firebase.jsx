import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvacwaRTRGYjaqsa0taN2eWiUTblbm2vA",
  authDomain: "barb-show-aea63.firebaseapp.com",
  projectId: "barb-show-aea63",
  storageBucket: "barb-show-aea63.appspot.com",
  messagingSenderId: "1038581959607",
  appId: "1:1038581959607:web:53a7b045df235c2f61f632",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
