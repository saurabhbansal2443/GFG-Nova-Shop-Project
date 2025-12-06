import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setScreenProducts } from "../ProductSlice";

const ProductGrid = () => {
  const dispatch = useDispatch();
  const screenProducts = useSelector((state) => state.product.screenProducts);
  async function getData() {
    let apiData = await fetch(`https://dummyjson.com/products`);
    let jsonData = await apiData.json();
    dispatch(setScreenProducts(jsonData.products));
  }
  console.log("screenProducts", screenProducts);
  useEffect(() => {
    getData();
  }, []);
  return <div></div>;
};

export default ProductGrid;
