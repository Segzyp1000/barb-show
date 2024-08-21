import React, { useState, useEffect } from "react";
import data from "../db/data";
import { useNavigate } from "react-router-dom";
import { db, auth, storage } from "../config/Firebase";

const AdminPage = () => {
  const [products, setProducts] = useState(data);
  const [totalProducts, setTotalProducts] = useState(data.length);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const user = auth.currentUser;
        if (!user || user.email !== "admin@mail.com") {
          alert("You don't have access to the admin page");
          navigate("/");
        } else {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkAdmin();
  }, []);

  const handleDeleteProduct = async (id) => {
    try {
      await db.collection("products").doc(id).delete();
      setProducts(products.filter((product) => product.id !== id));
      setTotalProducts(totalProducts - 1);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditProduct = async (id, updatedProduct) => {
    try {
      await db.collection("products").doc(id).update(updatedProduct);
      setProducts(
        products.map((product) =>
          product.id === id ? { ...product, ...updatedProduct } : product
        )
      );
      if (updatedProduct.title) {
        setTotalProducts(totalProducts + 1);
      } else {
        setTotalProducts(totalProducts - 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddProduct = async (newProduct) => {
    try {
      if (!image) {
        alert("Please select an image");
        return;
      }
      const docRef = await db.collection("products").add(newProduct);
      const imageUrl = await uploadImage(image, docRef.id);
      await db.collection("products").doc(docRef.id).update({ imageUrl });
      setProducts([...products, { ...newProduct, id: docRef.id, imageUrl }]);
      setTotalProducts(totalProducts + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const uploadImage = async (image, productId) => {
    try {
      const storageRef = storage.ref(`products/${productId}`);
      const snapshot = await storageRef.put(image);
      return await snapshot.ref.getDownloadURL();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div className="mt-20 flex space-x-5">
      <div className="flex">
        <h1>Admin Page</h1>
        <p>Total Products: {totalProducts}</p>
      </div>
      <div className="flex-col">
        <h1 className="text-2xl font-bold">Product List</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.title}
              <button onClick={() => handleDeleteProduct(product.id)}>
                Delete
              </button>
              <button
                onClick={() =>
                  handleEditProduct(product.id, { title: "Updated Title" })
                }
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddProduct({ title: "New Product", price: 99.99 });
        }}
      >
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AdminPage;

// jLnVPptToBkxGyzBr8LI
// // Get the user's UID from Firebase Authentication
// const uid = firebase.auth().currentUser.uid;

// // Get a reference to the user's document in Cloud Firestore
// const userRef = db.collection('users').doc(48TPH889R9dP9e1ReQWbVKl29Ku1);

// // Fetch the user's data from Firestore
// userRef.get()
//   .then(doc => {
//     if (doc.exists) {
//       const userRole = doc.data().role;

//       // Check the user's role and grant permissions
//       if (userRole === 'admin') {
//         // Show admin-only features
//         console.log("Welcome, Admin!");
//       } else {
//         // Show regular user features
//         console.log("Welcome, User!");
//       }
//     } else {
//       console.log("No such user document!");
//     }
//   })
//   .catch(error => {
//     console.error("Error getting user document:", error);
//   });
