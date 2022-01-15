import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pagination } from "../../models/Pagination";

const initialState: Pagination = {
  totalRecord: 0,
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPagination(state, actions: PayloadAction<Pagination>) {
      state.totalRecord = actions.payload.totalRecord;
      state.currentPage = actions.payload.currentPage;
    },
    setCurrentPage(state, actions: PayloadAction<number>) {
      state.currentPage = actions.payload;
    },
  },
});
