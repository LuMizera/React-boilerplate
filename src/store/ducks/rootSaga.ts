import { all, take, fork } from "redux-saga/effects";
import { AlertTypes } from "./alert/types";
import { shootAlert } from "./alert/sagas";

function* watchAlert() {
  while (true) {
    const { payload } = yield take(AlertTypes.DISPLAY_ALERT);
    if (payload && payload !== "") {
      yield fork(shootAlert, payload);
    }
  }
}

export default function* rootSaga() {
  return yield all([fork(watchAlert)]);
}
