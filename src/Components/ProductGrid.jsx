import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setScreenProducts } from "../ProductSlice";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const dispatch = useDispatch();
  const screenProducts = useSelector((state) => state.product.screenProducts);

  async function getData() {
    if (screenProducts.length > 0) return;
    console.log("api called for grid");
    let apiData = await fetch(`https://dummyjson.com/products`);
    let jsonData = await apiData.json();
    dispatch(setScreenProducts(jsonData.products));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">Products</h2>

      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5
          gap-6
        "
      >
        {screenProducts.map((productData) => (
          <ProductCard key={productData.id} productData={productData} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
