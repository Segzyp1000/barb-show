import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const Checkout = () => {
  const publicKey = "pk_live_8216d72e144ca1e11aaad755ef8158c327288236";
  const amount = 100000;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: name,
        },
        {
          display_name: "Phone",
          variable_name: "phone",
          value: phone,
        },
      ],
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("✅ Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("⚠️ Wait! Don't leave yet!"),
  };

  return (
    <div className="checkout container mx-auto mt-28 px-4 md:px-8 lg:px-16">
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 lg:p-12">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Checkout
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Name */}
          <div>
            <label
              className="block text-sm font-medium text-gray-600 mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-sm font-medium text-gray-600 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              className="block text-sm font-medium text-gray-600 mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            />
          </div>
        </div>

        {/* Pay Button */}
        <div className="mt-8">
          <PaystackButton
            className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md"
            {...componentProps}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
