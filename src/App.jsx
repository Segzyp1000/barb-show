import { useState } from "react";
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
import Checkout from "./pages/Checkout";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
import Mainlayer from "./Layer/Mainlayer";
import CartProvider from "./CartContext";
import { AuthProvider } from "./AuthContext";
import RequireAuth from "./RequireAuth";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayer />}>
        <Route index element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/details/:title" element={<ProductDetails />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
      </Route>
    )
  );

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
