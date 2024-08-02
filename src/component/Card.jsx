import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

function Card({ img, title, star, reviews, newPrice, prevPrice }) {
  return (
    <div>
      <section className="mt-10 h-[232px] space-y-7 shadow-lg border-black p-1 mx-auto">
        <div className="className=w-[111px] bg-slate-300 ">
          <img src={img} alt={title} />
        </div>
        <div className="card-details text-[13px]">
          <h3 className="ml-1">{title}</h3>
          <div className="flex space-x-2">
            <div className="flex text-yellow-500">
              <AiFillStar />
              {star}
              {star}
              {star}
            </div>
            <span>{reviews}</span>
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
    </div>
  );
}

export default Card;
