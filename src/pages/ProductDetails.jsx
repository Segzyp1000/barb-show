import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../db/data";

function ProductDetails() {
  const { title } = useParams();
  const product = data.find((product) => product.title === title);

  return (
    <div className="mx-auto w-3/4 p-12 bg-white mt-20">
      <div>
        <Link to="/" className=" text-navColor  p-5">
          Back to product page
        </Link>
      </div>
      <div className="mt-20 space-y-10">
        <h1>{product.title}</h1>
        <img src={product.img} alt={product.title} className="w-[200px]" />
        <p>Color:{product.color}</p>
        <p>Price: ₦{product.newPrice}</p>
        <p>Category: {product.category}</p>
        <p>
          <b>Description:</b> Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. At eligendi saepe qui ad, corporis ab placeat
          ducimus iusto ipsam, quam consequuntur voluptate cum magni vel
          assumenda quasi temporibus nulla veniam ratione sint. Repudiandae
          itaque repellat iste. Ea assumenda placeat odio, consequatur magnam
          beatae vel libero, totam nisi magni quas laborum! Laborum, animi.
        </p>
        <button>
          <Link
            to="/cart"
            className="bg-yellow-500 text-white mt-10 text-lg font-semibold px-2 rounded-lg"
          >
            Go to Cart
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
