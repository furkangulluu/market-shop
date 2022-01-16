import { mainSlice } from './../slices/main';
import { TypeFilter } from './../../models/filter-models/TypeFilter';
import { TagFilter } from './../../models/filter-models/TagFilter';
import { BrandFilter } from './../../models/filter-models/BrandFilter';
import { Products } from '../../models/Products';
import { put, call, select } from "redux-saga/effects";
import { getAllProducts } from "../api/api";
import { productSlice } from "../slices/products";
import { paginationSlice } from "../slices/pagination";
import { apiQuerySlice } from './../slices/apiQuery';
import { urlCreator } from "../../helpers/urlCreator";
import { Query } from "../../models/Query";
import { Page } from "../../models/filter-models/Page";
import { SortingFilter } from "../../models/filter-models/SortingFilter";

export function* getProducts() {
  yield put(mainSlice.actions.setLoading(true));
  let query: Query = {
    page: "1",
    limit: "16",
    sort: "price",
    order: "asc",
    manufacturer: ["All"],
    tags: ["All"],
    itemType: "All"
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
  yield put(mainSlice.actions.setLoading(false));
}

export function* getProductsByPagination({ payload }: Page) {
  yield put(mainSlice.actions.setLoading(true));
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
  yield put(mainSlice.actions.setLoading(false));
}

export function* getProductsBySorting({ payload }: SortingFilter) {
  yield put(mainSlice.actions.setLoading(true));
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
  yield put(
    paginationSlice.actions.setPagination({
      totalRecord: parseInt(items.allRecord),
      currentPage: 1,
    })
  );
  yield put(productSlice.actions.setAllProducts(items));
  yield put(mainSlice.actions.setLoading(false));
}

export function* getProductsByBrand({ payload }: BrandFilter) {
  yield put(mainSlice.actions.setLoading(true));
  yield put(apiQuerySlice.actions.setManufacturer(payload));
  
  let query: Query = yield select((state) => state.apiQuery);

  if (payload.includes('All')) {
    yield put(apiQuerySlice.actions.setQuery({ ...query, manufacturer: ['All'] }));
  } else {                         
    yield put(apiQuerySlice.actions.setManufacturer(payload));
  }

  query = { ...query, page: "1" };
  let url = urlCreator(query);

  const response: Products = yield call(getAllProducts, url);
  const items: Products = {
    allRecord: response.allRecord,
    products: [...response.products],
  };

  yield put(paginationSlice.actions.setCurrentPage(1));
  yield put(
    paginationSlice.actions.setPagination({
      totalRecord: parseInt(items.allRecord),
      currentPage: 1,
    })
  );
  yield put(productSlice.actions.setAllProducts(items));
  yield put(mainSlice.actions.setLoading(false));
}

export function* getProductsByTag({ payload }: TagFilter) {
  yield put(mainSlice.actions.setLoading(true));
  yield put(apiQuerySlice.actions.setTags(payload));

  let query: Query = yield select((state) => state.apiQuery);

  if (payload.includes("All")) {
    yield put(
      apiQuerySlice.actions.setQuery({ ...query, tags: ["All"] })
    );
  } else {
    yield put(apiQuerySlice.actions.setTags(payload));
  }

  query = { ...query, page: "1", };
  yield put(apiQuerySlice.actions.setQuery({ ...query }));

  let url = urlCreator(query);

  const response: Products = yield call(getAllProducts, url);
  const items: Products = {
    allRecord: response.allRecord,
    products: [...response.products],
  };

  yield put(paginationSlice.actions.setCurrentPage(1));
  yield put(
    paginationSlice.actions.setPagination({
      totalRecord: parseInt(items.allRecord),
      currentPage: 1,
    })
  );
  yield put(productSlice.actions.setAllProducts(items));
  yield put(mainSlice.actions.setLoading(false));
}

export function* getProductsByType({ payload }: TypeFilter) {
  yield put(mainSlice.actions.setLoading(true));
  let query: Query = yield select((state) => state.apiQuery);
  query = { ...query, page: "1", itemType: payload };
  yield put(apiQuerySlice.actions.setQuery({ ...query }));

  let url = urlCreator(query);

  const response: Products = yield call(getAllProducts, url);
  const items: Products = {
    allRecord: response.allRecord,
    products: [...response.products],
  };

  yield put(paginationSlice.actions.setCurrentPage(1));
  yield put(
    paginationSlice.actions.setPagination({
      totalRecord: parseInt(items.allRecord),
      currentPage: 1,
    })
  );
  yield put(productSlice.actions.setAllProducts(items));
  yield put(mainSlice.actions.setLoading(false));
}