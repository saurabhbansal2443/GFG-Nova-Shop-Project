import React from "react";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartProducts = useSelector((store) => store.product.cartProducts);
  const screenProducts = useSelector((store) => store.product.screenProducts);

  const cartProductsData = Object.keys(cartProducts).map((id) => {
    const productData = screenProducts.find((pdata) => pdata.id == id);
    return {
      quantity: cartProducts[id].quantity,
      productData: productData,
    };
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT — Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold mb-2">Shopping Cart</h2>

          {cartProductsData.map(({ quantity, productData }) => {
            const discountedPrice = (
              productData.price -
              (productData.price * productData.discountPercentage) / 100
            ).toFixed(2);

            return (
              <div
                key={productData.id}
                className="bg-white rounded-lg shadow p-4 flex gap-4"
              >
                {/* Product Image */}
                <div className="w-28 h-28 flex-shrink-0">
                  <img
                    src={productData.thumbnail}
                    alt={productData.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">
                      {productData.title}
                    </p>
                    <p className="text-xs text-gray-500">{productData.brand}</p>

                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {productData.description}
                    </p>

                    {/* Price */}
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-lg font-semibold text-blue-600">
                        ₹{discountedPrice}
                      </span>
                      <span className="text-sm line-through text-gray-400">
                        ₹{productData.price}
                      </span>
                      <span className="text-xs text-green-600 font-semibold">
                        {productData.discountPercentage}% off
                      </span>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm">
                      Qty:{" "}
                      <span className="font-medium px-2 py-1 bg-gray-100 rounded">
                        {quantity}
                      </span>
                    </p>

                    <button className="text-red-500 text-sm hover:underline">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT — Price Details */}
        <div className="bg-white shadow rounded-lg p-4 h-fit">
          <h3 className="text-lg font-semibold mb-4">Price Details</h3>

          <div className="space-y-3 text-sm">
            {cartProductsData.map(({ quantity, productData }) => {
              const discountedPrice = (
                productData.price -
                (productData.price * productData.discountPercentage) / 100
              ).toFixed(2);

              return (
                <div key={productData.id} className="flex justify-between">
                  <span>
                    {productData.title} × {quantity}
                  </span>
                  <span>₹{discountedPrice * quantity}</span>
                </div>
              );
            })}
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-semibold text-base">
            <span>Total Amount</span>
            <span>
              ₹
              {cartProductsData
                .reduce((acc, { quantity, productData }) => {
                  const discountedPrice =
                    productData.price -
                    (productData.price * productData.discountPercentage) / 100;
                  return acc + discountedPrice * quantity;
                }, 0)
                .toFixed(2)}
            </span>
          </div>

          <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
