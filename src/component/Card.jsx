import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

function Card({ id, img, title, star, newPrice, prevPrice }) {
  const cart = useContext(CartContext);
  return (
    <section className="mt-10 space-y-3 shadow-lg border-gray-950 ">
      <Link to={`/details/${title}`} className="flex justify-center h-[75px] ">
        <img src={img} alt={title} width={75} height={75} className="w-auto" />
      </Link>
      <div className="card-details text-[13px] p-3">
        <h3 className="ml-1 text-[12px] md:text-[15px] lg:text-[17px] max-lg:text-[19px] leading-5">
          {title}
        </h3>
        <div className="flex text-yellow-500  text-[12px] md:text-[15px] lg:text-[17px] max-lg:text-[19px] ">
          {star}
          {star}
          {star}
        </div>

        <div className="card-price flex space-x-5">
          <div className="price space-x-1  text-[12px] md:text-[15px] lg:text-[17px] max-lg:text-[19px] ">
            <del>₦{prevPrice}</del>
            <b>₦{newPrice}</b>
          </div>
        </div>
        <button
          onClick={() => cart.addOneToCart(id, img, title, newPrice)}
          className="bg-yellow-500 text-white hover:bg-slate-300 px-2 md:px-[0.7rem] max-lg:px-[1rem] rounded-xl"
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default Card;
