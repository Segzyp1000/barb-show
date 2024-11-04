import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../db/data";

function ProductDetails() {
  const { title } = useParams();
  const product = data.find((product) => product.title === title);

  return (
    <div className="mx-auto p-12 bg-white mt-20 container">
      <div>
        <Link to="/" className=" text-navColor  p-5">
          Back to product page
        </Link>
      </div>
      <div className="mt-20 space-y-10">
        <h1 className="text-[12px] md:text-[15px] lg:text-[17px] max-lg:text-[19px]">
          {product.title}
        </h1>
        <img src={product.img} alt={product.title} className="w-[200px]" />
        <p className="text-[12px] md:text-[15px] lg:text-[17px] max-lg:text-[19px]">
          Color:{product.color}
        </p>
        <p className="text-[12px] md:text-[15px] lg:text-[17px] max-lg:text-[19px]">
          Price: ₦{product.newPrice}
        </p>
        <p className="text-[12px] md:text-[15px] lg:text-[17px] max-lg:text-[19px]">
          Category: {product.category}
        </p>
        <p className="text-[12px] md:text-[15px] lg:text-[17px] max-lg:text-[19px]">
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
            className="bg-yellow-500 text-white mt-10 text-lg font-semibold px-2 md:px-[0.7rem] max-lg:px-[1rem] rounded-xl"
          >
            Go to Cart
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
