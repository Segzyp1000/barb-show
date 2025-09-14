// src/components/Card.tsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext, CartContextType } from "../CartContext";
import { AiFillStar } from "react-icons/ai";

type CardProps = {
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string | number;
  title?: string;
  img?: string;
  
  newPrice?: number | string;
  prevPrice?: number | string;
};

function Card({ id, img, title, newPrice, prevPrice }: CardProps) {
  const cart = useContext(CartContext) as CartContextType;

  return (
 <section className="w-full max-w-xs bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidde mt-10">

      <Link
        to={`/details/${title}`}
        className=" block overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110"
      >
        <img
          key={id}
          src={img}
          alt={title}
          width={60}
          height={60}
          className="w-full h-40 object-contain p-4 transition-transform duration-300 ease-in-out hover:scale-105]  max-w-[10rem] max-h-[8rem]"
        />
      </Link>

      <div className="card-details text-[13px] p-5">
        <h3 className="font-semibold text-base md:text-lg line-clamp-2">
          {title}
        </h3>

        <div className="flex text-yellow-500 sm:[8px] md:text-[12px] lg:text-[15px] max-lg:text-[17px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />

        </div>

        <div className="card-price flex space-x-5">
          <div className="price space-x-1 sm:text-[8px] md:text-[13px] lg:text-[12px] max-lg:text-[15px]">
            <del>₦{prevPrice}</del>
            <b>₦{newPrice}</b>
          </div>
        </div>

        <button
          onClick={() => {
            if (id && title && img && newPrice) {
              cart.addOneToCart(Number(id), img, title, Number(newPrice));
            }
          }}
          className="bg-yellow-500 text-white p-3 rounded-xl w-full py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default Card;
