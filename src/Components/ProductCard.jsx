import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { setCartProducts } from "../ProductSlice";

const ProductCard = ({ productData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, title, price, discountPercentage, rating, brand, thumbnail } =
    productData;

  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    0
  );

  function addProductToCart(id) {
    dispatch(setCartProducts(id));
  }

  function handlePdpNavigation() {
    navigate(`/products/${id}`);
  }

  return (
    <div
      onClick={handlePdpNavigation}
      className="
        bg-white rounded-xl shadow-md overflow-hidden 
        hover:shadow-xl hover:scale-[1.02] 
        transition-all cursor-pointer border border-gray-100
      "
    >
      {/* Product Image */}
      <div className="w-full h-44 bg-gray-100 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="
            w-full h-full object-cover
            hover:scale-105 transition-transform duration-300
          "
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title & Brand */}
        <p className="text-sm font-semibold text-gray-900 truncate">{title}</p>
        <p className="text-xs text-gray-500">{brand}</p>

        {/* Pricing */}
        <div className="mt-3">
          <div className="flex items-center gap-2">
            <p className="text-lg font-bold text-blue-600">
              ₹{discountedPrice}
            </p>
            <p className="text-sm line-through text-gray-400">₹{price}</p>
            <p className="text-xs font-semibold text-green-600">
              {discountPercentage}% OFF
            </p>
          </div>

          {/* Rating (no icons, simple badge) */}
          <p className="mt-2 inline-block bg-green-600 text-white text-xs px-2 py-0.5 rounded">
            ⭐ {rating}
          </p>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            addProductToCart(id);
          }}
          className="
            w-full mt-4 py-2
            bg-blue-600 text-white text-sm font-medium
            rounded-lg
            hover:bg-blue-700 active:scale-95
            transition
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
