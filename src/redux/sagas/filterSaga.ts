import { TagSearchFilter } from './../../models/filter-models/TagFilter';
import { Tag } from './../../models/Tag';
import { Brand } from './../../models/Brand';
import { put, call, select } from "redux-saga/effects";
import { Filters } from "../../models/Filters";
import { getAllFilters } from "../api/api";
import { filterSlice } from "../slices/filters";
import { BrandSearchFilter } from '../../models/filter-models/BrandFilter';

export function* getFilters() {
  const filters: Filters = yield call(getAllFilters);
  yield put(filterSlice.actions.setAllFilters(filters));
}

export function* searchBrandFilter({ payload }: BrandSearchFilter) {
  const filters: Filters = yield call(getAllFilters);
  let brand: Brand[] = filters.brands;
  if (payload) {
    brand = brand.filter((x) => x.name.toLowerCase().includes(payload.toLowerCase()));
  }
  yield put(filterSlice.actions.setSearchedBrands(brand));
}


export function* searchTagFilter({ payload }: TagSearchFilter) {
  const filters: Filters = yield call(getAllFilters);
  let tag: Tag[] = filters.tags;
  if (payload) {
    tag = tag.filter((x) =>
      x.name.toLowerCase().includes(payload.toLowerCase())
    );
  }
  yield put(filterSlice.actions.setSearchedTags(tag));
}