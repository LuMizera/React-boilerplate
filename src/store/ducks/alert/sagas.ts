// import { put } from "redux-saga/effects";
// import { shootAlert as action } from "./actions";

export function* shootAlert(text: string) {
  yield alert(text);
  // yield put(action("dasdas"));
  // shoot another dispatch
}
