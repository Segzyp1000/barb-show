import { useContext } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart container mx-auto px-6 md:px-12 mt-20 mb-10 py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>

      {cart.items.length > 0 ? (
        <div className="space-y-6">
          {cart.items.map((item, key) => (
            <div
              key={key}
              className="flex flex-col md:flex-row items-center justify-between gap-4 p-5 border rounded-2xl shadow-sm bg-white hover:shadow-md transition"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <img
                  src={item.img}
                  loading="lazy"
                  alt={item.title}
                  className="w-20 h-20 object-contain rounded-lg border"
                />
                <div>
                  <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
                  <p className="text-gray-600">₦{item.newPrice}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <button
                  onClick={() =>
                    cart.addOneToCart(item.id, item.img, item.title, item.newPrice)
                  }
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition"
                >
                  +
                </button>
                <span className="px-3 py-1 border rounded-lg bg-gray-100 text-gray-800">
                  {item.quantity}
                </span>
                <button
                  onClick={() => cart.removeOneFromCart(item.id)}
                  className="bg-navColor hover:bg-slate-700 text-white px-3 py-1 rounded-lg transition"
                >
                  -
                </button>
                <button
                  onClick={() => cart.deleteFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Section */}
          <div className="flex items-center justify-between mt-6 p-5 bg-gray-50 rounded-2xl border">
            <p className="text-xl font-bold text-gray-800">Total:</p>
            <p className="text-xl font-bold text-gray-900">₦{cart.getTotalCost()}</p>
          </div>

          {/* Checkout Button */}
          <div className="flex justify-end">
            <button
              className="bg-navColor hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-medium transition"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;