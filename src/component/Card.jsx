<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { BsFillBagHeartFill } from "react-icons/bs";

function Card({ img, title, star, newPrice, prevPrice }) {
  return (
    <section className="mt-10 space-y-3 shadow-lg border-gray-950 p-1">
      <Link to={`/details/${title}`} className="h-[75px] flex justify-center">
        <img src={img} alt={title} className="w-auto" />
      </Link>

=======
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

function Card({ id, img, title, star, newPrice, prevPrice }) {
  const cart = useContext(CartContext);
  return (
    <section className="mt-10 space-y-3 shadow-lg border-gray-950 px-2">
      <Link to={`/details/${title}`} className="h-[75px] flex justify-center">
        <img src={img} alt={title} className="w-auto" />
      </Link>
>>>>>>> master
      <div className="card-details text-[13px] p-3">
        <h3 className="ml-1">{title}</h3>
        <div className="flex text-yellow-500">
          {star}
          {star}
          {star}
        </div>

        <div className="card-price flex space-x-5">
          <div className="price space-x-1">
            <del>{prevPrice}/</del>
            <b>{newPrice}</b>
          </div>
<<<<<<< HEAD
          <div className="bag text-yellow-500">
            <BsFillBagHeartFill />
          </div>
        </div>
        <button className="bg-yellow-500 text-white text-sm font-semibold px-1 rounded-xl">
=======
        </div>
        <button
          onClick={() => cart.addOneToCart(id)}
          className="bg-yellow-500 text-white text-sm font-semibold px-1 rounded-xl"
        >
>>>>>>> master
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default Card;
