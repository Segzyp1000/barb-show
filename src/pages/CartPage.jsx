import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function CartPage() {
  const cart = useContext(CartContext);

  return (
    <div className="container mx-12 mt-20 mb-5 w-3/4 block space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      </div>

      {cart.items.length > 0 ? (
        <div className="cart-container flex flex-col ">
          {cart.items.map((item) => (
            <div className="border-b border-navColor">
              <div key={item.id} className="cart-item flex flex-col mb-4 py-7">
                <div className="product-info space-y-3">
                  <img src={item.img} alt={item.title} className="w-20 h-20" />
                  <h2>{item.title}</h2>
                </div>

                <div className="actions space-y-3">
                  <button
                    onClick={() => cart.addOneToCart(item.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => cart.removeOneFromCart(item.id)}
                    className="bg-white text-black px-2 py-1 rounded"
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
            <p>Total Cost:</p>
            <p>${cart.getTotalCost()}</p>
          </div>
          <button className="bg-navColor text-white px-4 mt-5 rounded p-2">
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
