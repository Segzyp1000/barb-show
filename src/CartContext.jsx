import { createContext, useState, useEffect } from "react";
import product from "./db/data";

const STORAGE_KEY = "cart-products";
const PAGE_KEY = "current-page";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  setCartProducts: () => {},
  currentPage: "",
  setCurrentPage: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  );
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem(PAGE_KEY) || "/"
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartProducts));
    localStorage.setItem(PAGE_KEY, currentPage);
  }, [cartProducts, currentPage]);

  const getProductQuantity = (id) => {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;
    return quantity || 0;
  };

  const addOneToCart = (id, img, title, newPrice) => {
    const existingProduct = cartProducts.find((product) => product.id === id);
    if (existingProduct) {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      setCartProducts([
        ...cartProducts,
        { id, img, title, newPrice, quantity: 1 },
      ]);
    }
    setCurrentPage(window.location.pathname);
  };

  const removeOneFromCart = (id) => {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
    setCurrentPage(window.location.pathname);
  };
  const deleteFromCart = (id) => {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => currentProduct.id !== id)
    );
    setCurrentPage(window.location.pathname);
  };

  const getTotalCost = () => {
    let totalCost = 0;
    cartProducts.forEach((cartItem) => {
      const productData = product.find((product) => product.id === cartItem.id);
      if (productData && productData.newPrice) {
        totalCost += productData.newPrice * cartItem.quantity;
      }
    });
    return totalCost;
  };

  const contextVakue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    setCartProducts,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextVakue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
