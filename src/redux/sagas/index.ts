import { spawn } from "redux-saga/effects";
import mainSaga from "./mainSaga";

// Export the root saga (All APIs: product, filters, main)
export default function* rootSaga() {
  yield spawn(mainSaga);
}
