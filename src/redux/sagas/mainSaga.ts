import { put, call, takeEvery, select } from "redux-saga/effects";
import { Products } from "../../models/Products";
import { Filters } from "../../models/Filters";

//ACTIONS
import {
  GET_FILTERS_SAGA,
  GET_PRODUCTS_SAGA,
} from "../actions/sagaActions";

//API
import { getAllProducts, getAllFilters } from "../api/api";
import { productSlice } from "../slices/products";
import { filterSlice } from "../slices/filters";


function* getProducts() {
  const products: Products = yield call(getAllProducts);
  yield put(productSlice.actions.setAllItems(products));
}

function* getFilters() {
  const filters: Filters = yield call(getAllFilters);
  yield put(filterSlice.actions.setAllFilters(filters));
}

export default function* mainSaga() {
    yield takeEvery(GET_PRODUCTS_SAGA, getProducts);
  yield takeEvery(GET_FILTERS_SAGA, getFilters);
}