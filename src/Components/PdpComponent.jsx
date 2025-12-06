import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PdpComponent = ({ id }) => {
  const [productData, setProductData] = useState(null);
  const screenProducts = useSelector((state) => state.product.screenProducts);

  async function getData() {
    let apiData = await fetch(`https://dummyjson.com/products/${id}`);
    let jsonData = await apiData.json();
    setProductData(jsonData);
  }

  useEffect(() => {
    let product = screenProducts.find((p) => p.id == id);
    if (product) {
      setProductData(product);
    } else {
      getData();
    }
  }, [id]);

  if (!productData) return <div className="p-10 text-gray-600">Loading...</div>;

  const discountedPrice = (
    productData.price -
    (productData.price * productData.discountPercentage) / 100
  ).toFixed(0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* PAGE WRAPPER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE → IMAGE SECTION */}
        <div className="flex flex-col items-center">
          <div className="w-full h-96 bg-gray-100 rounded-xl overflow-hidden">
            <img
              src={productData.thumbnail}
              alt={productData.title}
              className="w-full h-full object-contain p-4"
            />
          </div>
        </div>

        {/* RIGHT SIDE → PRODUCT DETAILS */}
        <div>
          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-900">
            {productData.title}
          </h1>

          {/* Brand */}
          <p className="text-sm text-gray-500 mt-1">{productData.brand}</p>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-2">
            <div className="bg-green-600 text-white px-2 py-0.5 rounded text-sm">
              ★ {productData.rating}
            </div>
            <span className="text-sm text-gray-500">
              {productData.reviews.length} reviews
            </span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            <p className="text-3xl font-bold text-gray-900">
              ₹{discountedPrice}
            </p>
            <p className="text-lg line-through text-gray-400">
              ₹{productData.price}
            </p>
            <p className="text-lg font-semibold text-green-600">
              {productData.discountPercentage}% off
            </p>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-700 leading-relaxed">
            {productData.description}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 transition text-black w-40 py-2 rounded-lg font-semibold">
              Add to Cart
            </button>
          </div>

          {/* Small Highlights */}
          <div className="mt-8 bg-gray-50 p-4 rounded-lg border">
            <h2 className="text-lg font-semibold mb-3">Product Highlights</h2>
            <ul className="text-gray-700 text-sm leading-6 list-disc pl-5">
              <li>Category: {productData.category}</li>
              <li>Stock available: {productData.stock}</li>
              <li>Warranty: {productData.warrantyInformation}</li>
              <li>Return Policy: {productData.returnPolicy}</li>
              <li>Shipping: {productData.shippingInformation}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* REVIEWS SECTION */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>

        <div className="space-y-4">
          {productData.reviews.map((review, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 bg-white shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-gray-800">
                  {review.reviewerName}
                </p>
                <span className="text-sm bg-green-600 text-white px-2 py-0.5 rounded">
                  ★ {review.rating}
                </span>
              </div>

              <p className="text-gray-700">{review.comment}</p>

              <p className="text-xs text-gray-500 mt-2">
                {new Date(review.date).toDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PdpComponent;
