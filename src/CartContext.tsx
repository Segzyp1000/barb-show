// src/CartContext.tsx
import { createContext, useState, useEffect } from "react";
import product from "./db/data";

// === Types ===
export type Product = {
  id: number; // corrected to number
  title: string;
  img: string;
  newPrice: number;
};

export type CartItem = Product & { quantity: number };

export type CartContextType = {
  items: CartItem[];
  query: string;
  setQuery: (q: string) => void;
  getProductQuantity: (id: number) => number;
  addOneToCart: (
    id: number,
    img: string,
    title: string,
    newPrice: number
  ) => void;
  removeOneFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
  getTotalCost: () => number;
  setCartProducts: React.Dispatch<React.SetStateAction<CartItem[]>>;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// === Context ===
const STORAGE_KEY = "cart-products";

export const CartContext = createContext<CartContextType>({
  items: [],
  query: "",
  setQuery: () => {},
  getProductQuantity: () => 0,
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => 0,
  setCartProducts: () => {},
  handleInputChange: () => {},
});

// === Provider ===
type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartProducts, setCartProducts] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  );
  const [query, setQuery] = useState<string>("");

  // Persist cart
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartProducts));
  }, [cartProducts]);

  // === Cart Logic ===
  const getProductQuantity = (id: number) => {
    const item = cartProducts.find((p) => p.id === id);
    return item?.quantity || 0;
  };

  const addOneToCart = (
    id: number,
    img: string,
    title: string,
    newPrice: number
  ) => {
    setCartProducts((prev) => {
      const exists = prev.find((p) => p.id === id);
      if (exists) {
        return prev.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { id, img, title, newPrice, quantity: 1 }];
    });
  };

  const removeOneFromCart = (id: number) => {
    setCartProducts((prev) => {
      const item = prev.find((p) => p.id === id);
      if (!item) return prev;
      if (item.quantity === 1) {
        return prev.filter((p) => p.id !== id);
      }
      return prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity - 1 } : p
      );
    });
  };

  const deleteFromCart = (id: number) => {
    setCartProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const getTotalCost = () => {
    return cartProducts.reduce((total, item) => {
      const productData = product.find((p) => p.id === item.id);
      return total + (Number(productData?.newPrice) || 0) * item.quantity;
    }, 0);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // === Context Value ===
  const contextValue: CartContextType = {
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
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
