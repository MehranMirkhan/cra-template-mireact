import { all, call, put, select } from "redux-saga/effects";

import { watcher } from ".";
import api, { axios, isSuccess } from "src/api";
import {
  loading,
  done,
  setToken,
  clearToken,
  signup,
  signin,
  signout,
  changePassword,
  hasTokenSelector,
} from "src/state/auth";
import { usersMeSelector } from "src/state/users";

export function* signupSaga(req: SignupReq) {
  const resp = yield call(api.auth.signup, req);
  if (isSuccess(resp)) {
    yield call(signinSaga, req);
  } else throw resp;
}

export function* signinSaga(req: SigninReq) {
  const hasToken: boolean = yield select(hasTokenSelector);
  if (hasToken) yield call(signoutSaga);
  const resp = yield call(api.auth.signin, req);
  if (isSuccess(resp)) {
    yield put(setToken(resp.data));
  } else throw resp;
}

export function* signoutSaga() {
  const hasToken: boolean = yield select(hasTokenSelector);
  if (!hasToken) return;
  yield put(clearToken());
}

export function* changePasswordSaga(req: ChangePasswordReq) {
  const hasToken: boolean = yield select(hasTokenSelector);
  if (!hasToken) return;
  const resp = yield call(api.auth.changePassword, req);
  if (isSuccess(resp)) {
    // yield put(setToken(resp.data));
    const me = yield select(usersMeSelector);
    yield call(signinSaga, {
      username: me.username,
      password: req.newPassword,
    });
  } else throw resp;
}

/**
 * Updates axios instance to include authorization header.
 *
 * @param res Singin response
 */
export function setAxiosAuthHeaders(res: SigninRes) {
  axios.defaults.headers.Authorization = `Bearer ${res.access_token}`;
}

/**
 * Updates axios instance to clear authorization header.
 */
export function clearAxiosAuthHeaders() {
  axios.defaults.headers.Authorization = undefined;
}

export default function* () {
  yield all([
    watcher(signup, signupSaga, loading, done),
    watcher(signin, signinSaga, loading, done),
    watcher(signout, signoutSaga, loading, done),
    watcher(changePassword, changePasswordSaga, loading, done),
    watcher(setToken, setAxiosAuthHeaders),
    watcher(clearToken, clearAxiosAuthHeaders),
  ]);
}
