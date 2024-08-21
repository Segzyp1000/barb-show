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
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    img: "",
  });

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
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddProduct = async () => {
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
    <div className="admin-page container flex-col justify-center items-center mx-auto p-4 mt-20 w-3/4">
      <h1 className="text-3xl font-bold mb-4">Admin Page</h1>
      <div className="product-list overflow-x-auto mt-10">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-4 py-2">{product.title}</td>
                <td className="px-4 py-2">
                  <img src={product.img} alt={product.title} width="50" />
                </td>
                <td className="px-4 py-2">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() =>
                      handleEditProduct(product.id, { title: "Updated Title" })
                    }
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form
        className="add-product-form mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddProduct();
        }}
      >
        <input
          type="file"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
        />
        <input
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          value="Add Product"
        />
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
//   })