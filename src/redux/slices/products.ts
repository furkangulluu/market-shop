import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../models/Products";

const initialState: Products = {
  products: [],
  allRecord: '0'
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts(state, actions: PayloadAction<Products>) {
      state.products = [...actions.payload.products];
      state.allRecord = actions.payload.allRecord;
    },
  },
});
