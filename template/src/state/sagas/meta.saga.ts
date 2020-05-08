import { all, call, take, put, select } from "redux-saga/effects";

import { watcher, delay } from ".";
import { storageLoaded, setLang, setAlert, clearAlert } from "src/state/meta";
import { setToken, clearToken } from "src/state/auth";
import { setMe, clearMe } from "src/state/users";
import { alertTimeout } from "src/app.config.json";
import i18n from "src/i18n";

/**
 * Previously stored data should be available when app starts.
 */
export function* loadStorageOnInit() {
  // Load from storage
  yield put(storageLoaded());
}

/**
 * Current state should be stored when changed.
 */
export function* saveStorageOnChange() {
  while (true) {
    yield take([
      setLang.type,
      setToken.type,
      clearToken.type,
      setMe.type,
      clearMe.type,
    ]);
    const state: AppState = yield select();
    if (state.meta.storageLoadedOnInit) {
      // Save to storage
    }
  }
}

/**
 * i18n language and body direction should be changed on language change.
 *
 * @param lang current language
 */
export function changeLangSaga(lang: string) {
  i18n.changeLanguage(lang);
  document.body.dir = lang === "fa" ? "rtl" : "ltr";
}

/**
 * Alert message should be cleared after a few seconds.
 */
export function* alertShouldClear() {
  yield delay(alertTimeout);
  yield call(clearAlert);
}

export default function* () {
  yield all([
    loadStorageOnInit(),
    saveStorageOnChange(),
    watcher(setLang, changeLangSaga),
    watcher(setAlert, alertShouldClear),
  ]);
}
