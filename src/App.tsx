import { useEffect } from "react";
import {
  Route,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
import Mainlayer from "./Layer/Mainlayer";
import CartProvider from "./CartContext";
import { AuthProvider } from "./AuthContext";
import RequireAuth from "./RequireAuth";


function App(): JSX.Element {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayer />}>
        <Route index element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:title" element={<ProductDetails />} />
        
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

  useEffect(() => {
    const storedPage = localStorage.getItem("current-page");
    if (storedPage && window.location.pathname !== storedPage) {
      window.location.href = storedPage;
    }
  }, []);

  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
