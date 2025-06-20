import { createContext, useState, useEffect } from "react";
import product from "./db/data";

const STORAGE_KEY = "cart-products";

export const CartContext = createContext({
  items: [],
  query: "",
  setQuery: () => {},
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  setCartProducts: () => {},
  handleInputChange: () => {},
});

export const CartProvider = ({ children }) => {
  // State
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  );
  const [query, setQuery] = useState("");

  // Persist cart in localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartProducts));
  }, [cartProducts]);

  // === Cart Logic ===
  const getProductQuantity = (id) => {
    const item = cartProducts.find((product) => product.id === id);
    return item?.quantity || 0;
  };

  const addOneToCart = (id, img, title, newPrice) => {
    const exists = cartProducts.find((product) => product.id === id);
    if (exists) {
      setCartProducts((prev) =>
        prev.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      setCartProducts((prev) => [
        ...prev,
        { id, img, title, newPrice, quantity: 1 },
      ]);
    }
  };

  const removeOneFromCart = (id) => {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts((prev) =>
        prev.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  };

  const deleteFromCart = (id) => {
    setCartProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const getTotalCost = () => {
    return cartProducts.reduce((total, item) => {
      const productData = product.find((p) => p.id === item.id);
      return total + (productData?.newPrice || 0) * item.quantity;
    }, 0);
  };

  // === Search Input Handler ===
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // === Context Value ===
  const contextValue = {
    items: cartProducts,
    query,
    setQuery,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    setCartProducts,
    handleInputChange,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
