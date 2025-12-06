import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hello: "Hello data ",
  screenProducts: [],
};

export const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setScreenProducts: (state, action) => {
      state.screenProducts = action.payload;
    },
  },
});

export const { setScreenProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
