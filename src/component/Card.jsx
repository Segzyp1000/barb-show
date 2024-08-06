import React from "react";

import { BsFillBagHeartFill } from "react-icons/bs";

function Card({ img, title, star, newPrice, prevPrice }) {
  return (
    <section className="mt-10 space-y-3 shadow-lg border-gray-950 p-1">
      <div className=" h-[75px] flex justify-center">
        <img src={img} alt={title} className="w-auto" />
      </div>

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
          <div className="bag text-yellow-500">
            <BsFillBagHeartFill />
          </div>
        </div>
        <button className="bg-yellow-500 text-white px-1 rounded-xl">
          Add to Cart{" "}
        </button>
      </div>
    </section>
  );
}

export default Card;
