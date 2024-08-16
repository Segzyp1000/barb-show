import { db } from "./Firebase";
import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth/cordova";

function AddProducts() {
  const [shoeList, setShoeList] = useState([]);

  const shoeCollectionRef = collection(db, "Shoe Store");

  useEffect(() => {
    const getShoeList = () => {
      //get Shoe list from db
      // set the shoe List
      try {
        const data = getDocs(shoeCollectionRef);
      } catch (err) {
        console.error(err);
      }
    };
    getShoeList();
  }, []);
  return <div></div>;
}

export default AddProducts;
