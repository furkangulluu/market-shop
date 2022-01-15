import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/";

import { productSlice } from "./slices/products";
import { filterSlice } from "./slices/filters";
import { apiQuerySlice } from './slices/apiQuery';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    filters: filterSlice.reducer,
    apiQuery: apiQuerySlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;