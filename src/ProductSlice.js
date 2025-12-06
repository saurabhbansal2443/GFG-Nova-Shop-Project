import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenProducts: [],
  cartProducts: {},
};

export const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setScreenProducts: (state, action) => {
      state.screenProducts = action.payload;
    },
    setCartProducts: (state, action) => {
      if (state.cartProducts[action.payload]) {
        state.cartProducts = {
          ...state.cartProducts,
          [action.payload]: {
            quantity: state.cartProducts[action.payload].quantity + 1,
          },
        };
      } else {
        state.cartProducts = {
          ...state.cartProducts,
          [action.payload]: {
            quantity: 1,
          },
        };
      }
    },
  },
});

export const { setScreenProducts, setCartProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
