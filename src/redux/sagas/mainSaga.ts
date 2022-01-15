import { GET_PRODUCT_BY_TYPE_SAGA } from './../actions/sagaActions';
import { takeEvery } from "redux-saga/effects";

//Actions
import {
  GET_FILTERS_SAGA,
  GET_PRODUCTS_SAGA,
  GET_PAGINATION_SAGA,
  GET_PRODUCT_BY_SORTING_SAGA,
  GET_PRODUCT_BY_BRAND_SAGA,
  GET_PRODUCT_BY_TAG_SAGA,
  SEARCH_BRAND_SAGA,
  SEARCH_TAG_SAGA,
} from "../actions/sagaActions";

//Modules
import {
  getProducts,
  getProductsByPagination,
  getProductsBySorting,
  getProductsByBrand,
  getProductsByTag,
  getProductsByType,
} from "./productSaga";
import { getFilters, searchBrandFilter, searchTagFilter } from "./filterSaga";


export default function* mainSaga() {
  yield takeEvery(GET_PRODUCTS_SAGA, getProducts);
  yield takeEvery(GET_FILTERS_SAGA, getFilters);
  yield takeEvery(GET_PAGINATION_SAGA, getProductsByPagination);
  yield takeEvery(GET_PRODUCT_BY_SORTING_SAGA, getProductsBySorting);
  yield takeEvery(GET_PRODUCT_BY_BRAND_SAGA, getProductsByBrand);
  yield takeEvery(GET_PRODUCT_BY_TAG_SAGA, getProductsByTag);
  yield takeEvery(GET_PRODUCT_BY_TYPE_SAGA, getProductsByType);
  yield takeEvery(SEARCH_BRAND_SAGA, searchBrandFilter);
  yield takeEvery(SEARCH_TAG_SAGA, searchTagFilter);
}
