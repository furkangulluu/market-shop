import { Products } from '../../models/Products';
import { put, call, select } from "redux-saga/effects";
import { getAllProducts } from "../api/api";
import { productSlice } from "../slices/products";
import { paginationSlice } from "../slices/pagination";
import { apiQuerySlice } from './../slices/apiQuery';
import { urlCreator } from "../../helpers/urlCreator";
import { Query } from "../../models/Query";
import { Page } from "../../models/filter-models/Page";
import { Sort } from "../../models/filter-models/Sort";

export function* getProducts() {
  let query: Query = {
    page: "1",
    limit: "16",
  };
  let url = urlCreator(query);

  const response: Products = yield call(getAllProducts, url);
  const allItems: Products = {
    allRecord: response.allRecord,
    products: [...response.products],
  };

  yield put(apiQuerySlice.actions.setQuery({ ...query }));
  yield put(
    paginationSlice.actions.setPagination({
      totalRecord: parseInt(allItems.allRecord),
      currentPage: 1,
    })
  );
  yield put(productSlice.actions.setAllProducts(allItems));
}

export function* getProductsByPagination({ payload }: Page) {
  let query: Query = yield select((state) => state.apiQuery);
  query = { ...query, page: `${payload}` };
  yield put(apiQuerySlice.actions.setQuery({ ...query }));

  let url = urlCreator(query);

  const response: Products = yield call(getAllProducts, url);
  const items: Products = {
    allRecord: response.allRecord,
    products: [...response.products],
  };

  yield put(paginationSlice.actions.setCurrentPage(payload));
  yield put(paginationSlice.actions.setPagination({ totalRecord: parseInt(items.allRecord), currentPage: payload }));
  yield put(productSlice.actions.setAllProducts(items));
}

export function* getProductsBySorting({ payload }: Sort) {
  let query: Query = yield select((state) => state.apiQuery);
  query = { ...query, page: "1", sort: payload.sort, order: payload.order };
  yield put(apiQuerySlice.actions.setQuery({ ...query }));

  let url = urlCreator(query);

  const response: Products = yield call(getAllProducts, url);
  const items: Products = {
    allRecord: response.allRecord,
    products: [...response.products],
  };

  yield put(paginationSlice.actions.setCurrentPage(1));
  yield put(paginationSlice.actions.setPagination({ totalRecord: parseInt(items.allRecord), currentPage: 1 }));
  yield put(productSlice.actions.setAllProducts(items));
}