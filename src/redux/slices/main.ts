import { Main } from './../../models/Main';
import { ScreenType } from './../../models/ScreenType';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Main = {
  isMobile: false,
  loading: true,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setScreenType(state, actions: PayloadAction<boolean>) {
      state.isMobile = actions.payload;
    },
    setLoading(state, actions: PayloadAction<boolean>) {
      state.loading = actions.payload;
    },
  },
});
