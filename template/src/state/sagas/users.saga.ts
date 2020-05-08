import { all, call, put, select } from "redux-saga/effects";

import { watcher } from ".";
import api, { isSuccess } from "src/api";
import {
  loading,
  done,
  setMe,
  clearMe,
  fetchMe,
  updateMe,
} from "src/state/users";
import { setToken, clearToken, hasTokenSelector } from "src/state/auth";

export function* fetchMeSaga() {
  const hasToken: boolean = yield select(hasTokenSelector);
  if (!hasToken) return;
  const resp = yield call(api.users.fetchMe);
  if (isSuccess(resp)) {
    yield put(setMe(resp.data));
  } else throw resp;
}

export function* updateMeSaga(user: User) {
  const hasToken: boolean = yield select(hasTokenSelector);
  if (!hasToken) return;
  const resp = yield call(api.users.updateMe, user);
  if (isSuccess(resp)) {
    yield put(setMe(resp.data));
  } else throw resp;
}

export function* clearMeSaga() {
  yield put(clearMe());
}

export default function* () {
  yield all([
    watcher(fetchMe, fetchMeSaga, loading, done),
    watcher(updateMe, updateMeSaga, loading, done),
    watcher(setToken, fetchMeSaga, loading, done),
    watcher(clearToken, clearMeSaga, loading, done),
  ]);
}
