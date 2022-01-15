import { put, call, select } from "redux-saga/effects";
import { Filters } from "../../models/Filters";
import { getAllFilters } from "../api/api";
import { filterSlice } from "../slices/filters";

export function* getFilters() {
  const filters: Filters = yield call(getAllFilters);
  yield put(filterSlice.actions.setAllFilters(filters));
}