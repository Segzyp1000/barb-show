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
import Mainlayer from "./Layer/Mainlayer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayer />}>
      <Route index element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signout" element={<Signout />} />
      <Route path="/details/:title" element={<ProductDetails />} />
    </Route>
  )
);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
