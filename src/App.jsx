import { useState, useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import CartPage from "./pages/CartPage";
import About from "./pages/About";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Mainlayer from "./Layer/Mainlayer";
import CartProvider from "./CartContext";
import { AuthProvider } from "./AuthContext";
import RequireAuth from "./RequireAuth";
import AdminPage from "./admin/AdminPage";
import { CartContext } from "./CartContext";

import { useContext } from "react";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayer />}>
        <Route index element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:title" element={<ProductDetails />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    )
  );

  const { currentPage, setCurrentPage } = useContext(CartContext);

  useEffect(() => {
    const storedPage = localStorage.getItem("current-page");
    if (storedPage && window.location.pathname !== storedPage) {
      window.location.href = storedPage;
    }
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <div>
          <RouterProvider router={router} />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
