import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Query } from "../../models/Query";

const initialState: Query = {
  page: "1",
  limit: "16",
  order: "asc",
  sort: "",
  itemType: "",
  manufacturer: [],
  tags: [],
};

export const apiQuerySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery(state, actions: PayloadAction<Query>) {
      const payloads = actions.payload;
      state.page = payloads.page;
      state.limit = payloads.limit;
      state.order = payloads.order;
      state.sort = payloads.sort;
      state.itemType = payloads.itemType;
      state.manufacturer = payloads.manufacturer;
      state.tags = payloads.tags;
    },
    setManufacturer(state, actions: PayloadAction<string[]>) {
      state.manufacturer = actions.payload
    },
    setTags(state, actions: PayloadAction<string[]>) {
      state.tags = actions.payload
    },
  },
});
