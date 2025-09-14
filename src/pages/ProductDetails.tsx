import { useParams, Link } from "react-router-dom";
import data from "../db/data";
import {useContext} from "react";
import { CartContext } from "../CartContext";

// Product type (update fields if needed to match your data)
type Product = {
  id: number;
  title: string;
  img: string;
  color: string;
  newPrice: number;
  category: string;
};

function ProductDetails() {
  const cart = useContext(CartContext);
  const { title } = useParams<{ title: string }>();
   
  

  if (!title) {
    return (
      <div className="p-12 text-center">
        <Link to="/" className="text-navColor underline hover:text-gray-700">
          Back to product page
        </Link>
        <p className="mt-10 text-red-500">Invalid product title.</p>
      </div>
    );
  }

  const product: Product | undefined = (data as Product[]).find(
    (item) => item.title === title
  );

  if (!product) {
    return (
      <div className="p-12 text-center">
        <Link to="/" className="text-navColor underline hover:text-gray-700">
          Back to product page
        </Link>
        <p className="mt-10 text-red-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="product mx-auto p-8 md:p-12 bg-white mt-20 container rounded-2xl shadow-lg">
      {/* Back link */}
      <div>
        <Link
          to="/"
          className="text-navColor font-medium hover:text-gray-800 flex items-center gap-2"
        >
          ← Back to products
        </Link>
      </div>

      {/* Product content */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={product.img}
            alt={product.title}
            className="w-[280px] md:w-[350px] rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Details */}
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {product.title}
          </h1>
          <p className="text-gray-600 text-sm uppercase tracking-wide">
            {product.category}
          </p>
          <p className="text-lg">
            <span className="font-medium">Color:</span>{" "}
            <span className="capitalize">{product.color}</span>
          </p>
          <p className="text-3xl font-bold text-yellow-600">
            ₦{product.newPrice.toLocaleString()}
          </p>

          <p className="text-gray-700 leading-relaxed">
            <b>Description:</b> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris pellentesque eros ac libero dictum, in
            facilisis dui gravida. Perfect for daily use and stylish occasions.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button  onClick={() => cart.addOneToCart(product.id, product.img, product.title, product.newPrice)}
            className="bg-yellow-500 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-yellow-600 transition-colors">
              Add to Cart
            </button>
            <Link
              to="/cart"
              className="bg-navColor text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-gray-800 transition-colors text-center"
            >
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
