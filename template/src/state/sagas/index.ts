import { all, take, call, put } from "redux-saga/effects";

import metaSagas from "./meta.saga";
import authSagas from "./auth.saga";
import usersSagas from "./users.saga";

import { setAlert } from "src/state/meta";

export function* watcher(
  action: any,
  saga: any,
  loading: any = undefined,
  done: any = undefined
) {
  while (true) {
    const { payload } = yield take(action.type);
    if (!!loading) yield put(loading());
    try {
      if (!!payload) yield call(saga, payload);
      else yield call(saga);
    } catch (error) {
      if (!!error) {
        if (!!error.message)
          yield put(setAlert({ alert: error.message, alertType: "error" }));
        if (!!error.data && !!error.data.message)
          yield put(
            setAlert({ alert: error.data.message, alertType: "error" })
          );
      }
    }
    if (!!done) yield put(done());
  }
}

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default function* () {
  yield all([metaSagas(), authSagas(), usersSagas()]);
}
