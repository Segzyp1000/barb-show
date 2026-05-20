import { useEffect, useState, lazy, Suspense } from "react";
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
import Loader from "./component/Loader";

function App(): JSX.Element {
  const [loading, setLoading] = useState(true);

  const MainPage = lazy(() => import("./pages/MainPage"));
  const CartPage = lazy(() => import("./pages/CartPage"));
  const Signin = lazy(() => import("./pages/Signin"));
  const Register = lazy(() => import("./pages/Register"));
  const Checkout = lazy(() => import("./pages/Checkout"));
  const ProductDetails = lazy(() => import("./pages/ProductDetails"));

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
      </Route>,
    ),
  );

  useEffect(() => {
    const storedPage = localStorage.getItem("current-page");

    if (storedPage && window.location.pathname !== storedPage) {
      window.location.href = storedPage;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <Suspense fallback={<Loader />}>
            <RouterProvider router={router} />
          </Suspense>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
