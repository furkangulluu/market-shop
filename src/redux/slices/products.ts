import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../models/Products";

const initialState: Products = {
    products: [],
}

export const productSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        setAllItems(state, actions: PayloadAction<Products>) {
            state.products = [...actions.payload.products];
        },
    },
});