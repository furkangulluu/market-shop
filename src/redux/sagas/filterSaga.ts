import { mainSlice } from './../slices/main';
import { TagSearchFilter } from './../../models/filter-models/TagFilter';
import { Tag } from './../../models/Tag';
import { Brand } from './../../models/Brand';
import { put, call } from "redux-saga/effects";
import { Filters } from "../../models/Filters";
import { getAllFilters } from "../api/api";
import { filterSlice } from "../slices/filters";
import { BrandSearchFilter } from '../../models/filter-models/BrandFilter';

// Getting brands, tags and types (filters) from API.
export function* getFilters() {
  yield put(mainSlice.actions.setLoading(true));
  const filters: Filters = yield call(getAllFilters);
  yield put(filterSlice.actions.setAllFilters(filters));
  yield put(mainSlice.actions.setLoading(false));
}

// Searhing brands from API.
export function* searchBrandFilter({ payload }: BrandSearchFilter) {
  yield put(mainSlice.actions.setLoading(true));
  const filters: Filters = yield call(getAllFilters);
  let brand: Brand[] = filters.brands;
  if (payload) {
    brand = brand.filter((x) => x.name.toLowerCase().includes(payload.toLowerCase()));
  }
  yield put(filterSlice.actions.setSearchedBrands(brand));
  yield put(mainSlice.actions.setLoading(false));
}

// Searhing tags from API.
export function* searchTagFilter({ payload }: TagSearchFilter) {
  yield put(mainSlice.actions.setLoading(true));
  const filters: Filters = yield call(getAllFilters);
  let tag: Tag[] = filters.tags;
  if (payload) {
    tag = tag.filter((x) =>
      x.name.toLowerCase().includes(payload.toLowerCase())
    );
  }
  yield put(filterSlice.actions.setSearchedTags(tag));
  yield put(mainSlice.actions.setLoading(false));
}