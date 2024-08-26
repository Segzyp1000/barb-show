import React, { useState, useEffect } from "react";
import data from "../db/data";
import { useNavigate } from "react-router-dom";
import { db, auth, storage } from "../config/Firebase";

const AdminPage = () => {
  const [products, setProducts] = useState(data);
  const [totalProducts, setTotalProducts] = useState(data.length);
  const [isAdmin, setIsAdmin] = useState(false);
  const [image, setImage] = useState(null);
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    img: "",
  });

  const navigate = useNavigate();

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

  useEffect(() => {
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
      setNewProduct(updatedProduct);
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
      const productsCollection = collection(db, "products");
      const productsSnapshot = await getDocs(productsCollection);
      const products = productsSnapshot.docs.map((doc) => doc.data());
      setProducts(products);
      setTotalProducts(products.length);
    } catch (error) {
      console.error(error);
    }
  };

  const uploadImage = async (image, productId) => {
    try {
      const storageRef = ref(storage, `products/${productId}`);
      const uploadResult = await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(uploadResult.ref);
      return imageUrl;
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
                      handleEditProduct(product.id, {
                        title: "Updated Title",
                      })
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
          className="text-navColor"
          onChange={(e) => setImage(e.target.files[0])}
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
