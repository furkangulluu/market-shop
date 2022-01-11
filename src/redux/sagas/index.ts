import { spawn } from "redux-saga/effects";
import mainSaga from "./main-saga";

export default function* rootSaga() {
  yield spawn(mainSaga);
}
