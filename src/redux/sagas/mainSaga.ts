import { takeEvery } from "redux-saga/effects";

//Actions
import {
  GET_FILTERS_SAGA,
  GET_PRODUCTS_SAGA,
  GET_PAGINATION_SAGA,
  GET_SORTING_SAGA,
} from "../actions/sagaActions";

//Modules
import {
  getProducts,
  getProductsByPagination,
  getProductsBySorting,
} from "./productSaga";
import { getFilters } from "./filterSaga";


export default function* mainSaga() {
  yield takeEvery(GET_PRODUCTS_SAGA, getProducts);
  yield takeEvery(GET_FILTERS_SAGA, getFilters);
  yield takeEvery(GET_PAGINATION_SAGA, getProductsByPagination);
  yield takeEvery(GET_SORTING_SAGA, getProductsBySorting);
}
