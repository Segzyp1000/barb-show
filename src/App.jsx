import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Signin from "./pages/Signin";
import Signout from "./pages/Signout";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
<<<<<<< HEAD
=======
import Mainlayer from "./Layer/Mainlayer";
import CartProvider from "./CartContext";
>>>>>>> master

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
<<<<<<< HEAD
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signout" element={<Signout />} />
      <Route path="/details/:title" element={<ProductDetails />} />
=======
      <Route path="/" element={<Mainlayer />}>
        <Route index element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/details/:title" element={<ProductDetails />} />
      </Route>
>>>>>>> master
    </>
  )
);

function App() {
  return (
<<<<<<< HEAD
    <div className="app">
      <RouterProvider router={router} />
    </div>
=======
    <CartProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </CartProvider>
>>>>>>> master
  );
}

export default App;
