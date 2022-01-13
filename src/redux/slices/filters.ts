import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "../../models/Filters";

const initialState: Filters = {
    brands: [],
    tags: [],
    types: [],
}

export const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setAllFilters(state, actions: PayloadAction<Filters>) {
            state.brands = [...actions.payload.brands];
            state.tags = [...actions.payload.tags];
        },
    },
});