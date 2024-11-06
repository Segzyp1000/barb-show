import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="container mx-7 md:mx-auto mt-20 mb-5 py-12 ">
      <div>
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      </div>
      {cart.items.length > 0 ? (
        <div className="cart-container flex flex-col ">
          {cart.items.map((item) => (
            <div className="border-b px-4 border-slate-400">
              <div
                key={item.id}
                className="cart-item flex justify-between flex-wrap  mb-4 py-7"
              >
                <div className="flex space-x-2 items-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 p-7"
                  />
                  <div>
                    <h2 className="font-bold">{item.title}</h2>
                    <h2 className="font-normal">Price: ₦{item.newPrice}</h2>
                  </div>
                </div>

                <div className="space-y-2 mt-10 space-x-2 ">
                  <button
                    onClick={() => cart.addOneToCart(item.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                  <button className="bg-white text-black px-2 py-1 rounded">
                    {item.quantity}
                  </button>
                  <button
                    onClick={() => cart.removeOneFromCart(item.id)}
                    className="bg-navColor text-white px-2 py-1 rounded"
                  >
                    -
                  </button>

                  <button
                    onClick={() => cart.deleteFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="total-cost flex mt-5">
            <p className="font-bold text-[19px]">Total:</p>
            <p className="font-bold text-[19px]">₦{cart.getTotalCost()}</p>
          </div>

          <div>
            <button
              className="bg-navColor text-white px-4 mt-5 rounded p-2 hover:bg-slate-700 cursor-pointer"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="font-normal">Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
