import { spawn } from "redux-saga/effects";
import mainSaga from "./mainSaga";

export default function* rootSaga() {
  yield spawn(mainSaga);
}
