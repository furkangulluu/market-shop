import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/Product";
import { Basket } from "./../../models/Basket";
import { BasketItem } from "./../../models/BasketItem";

const initialState: Basket = {
  products: [],
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket(state, actions: PayloadAction<Product>) {
      const indexOf = state.products.findIndex(
        (product) => product.product.added === actions.payload.added
      );

      if (indexOf > -1) {
        state.products[indexOf].count += 1;
        state.totalPrice += actions.payload.price;
      } else {
        const newProduct: BasketItem = {
          product: actions.payload,
          count: 1,
        };
        state.products.push(newProduct);
        state.totalPrice += newProduct.product.price;
      }
    },
    decreaseBasketItem(state, actions: PayloadAction<BasketItem>) {
      const indexOf = state.products.findIndex(
        (product) => product.product.added === actions.payload.product.added
      );
      state.products[indexOf].count -= 1;
      state.totalPrice -= actions.payload.product.price;

      if (state.products[indexOf].count === 0) {
        state.products.splice(indexOf, 1);
      }
    },
    increaseBasketItem(state, actions: PayloadAction<BasketItem>) {
      const indexOf = state.products.findIndex(
        (product) => product.product.added === actions.payload.product.added
      );
      state.products[indexOf].count += 1;
      state.totalPrice += actions.payload.product.price;
    },
  },
});
