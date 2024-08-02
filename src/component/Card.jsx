import React from "react";

import { BsFillBagHeartFill } from "react-icons/bs";

function Card({ img, title, star, newPrice, prevPrice }) {
  return (
    <section className="mt-10  space-y-5 shadow-lg border-black p-1 mx-auto">
      <div className=" h-[75px] flex items-center justify-center">
        <img src={img} alt={title} className="max-h-full w-auto p-1" />
      </div>
      <div className="card-details text-[13px] p-3">
        <h3 className="ml-1">{title}</h3>
        <div className="flex space-x-2">
          <div className="flex text-yellow-500">
            {star}
            {star}
            {star}
          </div>
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
      </div>
    </section>
  );
}

export default Card;
