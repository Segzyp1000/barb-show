import { createContext, useState, useEffect } from "react";
import product from "./db/data";

const STORAGE_KEY = "cart-products";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  setCartProducts: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartProducts));
  }, [cartProducts]);

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
  };

  const deleteFromCart = (id) => {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => currentProduct.id !== id)
    );
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

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    setCartProducts,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
