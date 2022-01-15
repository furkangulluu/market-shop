import { Tag } from './../../models/Tag';
import { Brand } from "./../../models/Brand";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "../../models/Filters";

const initialState: Filters = {
  brands: [],
  tags: [],
  types: [],
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setAllFilters(state, actions: PayloadAction<Filters>) {
      state.brands = [...actions.payload.brands];
      state.tags = [...actions.payload.tags];
      state.types = [...actions.payload.types];
    },
    setSearchedBrands(state, actions: PayloadAction<Brand[]>) {
      state.brands = [...actions.payload];
    },
    setSearchedTags(state, actions: PayloadAction<Tag[]>) {
      state.tags = [...actions.payload];
    },
  },
});
