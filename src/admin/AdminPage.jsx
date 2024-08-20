import React, { useState, useEffect } from "react";
import data from "../db/data"; // Import the hardcoded data
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [products, setProducts] = useState(data); // Use the hardcoded data
  const [totalProducts, setTotalProducts] = useState(data.length);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const token = await user.getIdTokenResult();
          if (token.claims.admin) {
            setIsAdmin(true);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkAdmin();
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    setTotalProducts(products.length - 1);
  };

  const handleEditProduct = (id, updatedProduct) => {
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      setProducts(
        products.map((product) =>
          product.id === id ? { ...product, ...updatedProduct } : product
        )
      );
    }
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setTotalProducts(products.length + 1);
  };

  if (!isAdmin) {
    return <div>You are not authorized to access this page.</div>;
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <p>Total Products: {totalProducts}</p>
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
      <form
        onSubmit={(e) =>
          handleAddProduct({ title: "New Product", price: 99.99 })
        }
      >
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AdminPage;
