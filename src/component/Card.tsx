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
  const cart = useContext(CartContext);

  return (
    <section className="group w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden mt-5 relative">
      {/* Image */}
      <Link
        to={`/details/${title}`}
        className="block overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-105"
      >
        <img
          key={id}
          src={img}
          alt={title}
          loading="lazy"
          width={60}
          height={60}
          className="w-full h-fit object-contain p-4  max-w-[10rem] max-h-[8rem]"
        />

      </Link>

      {/* Card content */}
      <div className="card-details text-[13px] p-5">
        <h3 className="font-semibold text-base md:text-lg line-clamp-2">
          {title}
        </h3>

          <div className="flex  space-x-2 items-center  mt-2">
        <div className="flex text-yellow-500 mt-1">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>

        <div className="card-price flex space-x-5 ">
          <div className="price space-x-1 sm:text-[10px] md:text-[13px]">
            <del>₦{prevPrice}</del>
            <b>₦{newPrice}</b>
          </div>
        </div>
        </div>
      </div>

      {/* Add to Cart Button - hidden by default */}
      <button
        onClick={() => {
          if (id && title && img && newPrice) {
            cart.addOneToCart(Number(id), img, title, Number(newPrice));
          }
        }}
        className="absolute bottom-0 left-0 right-0 bg-yellow-500 text-white py-2 font-medium rounded-b-2xl opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
      >
        Add to Cart
      </button>
    </section>
  );
}

export default Card;
