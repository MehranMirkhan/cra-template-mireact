import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: MetaState = {
  storageLoadedOnInit: false,
  lang: "en",
  alert: undefined,
  alertType: undefined,
};

const metaSlice = createSlice({
  name: "meta",
  initialState,
  reducers: {
    storageLoaded(state: MetaState) {
      state.storageLoadedOnInit = true;
    },
    setLang(state: MetaState, { payload }: PayloadAction<string>) {
      state.lang = payload;
    },
    setAlert(
      state: MetaState,
      { payload }: PayloadAction<{ alert: string; alertType: AlertType }>
    ) {
      state.alert = payload.alert;
      state.alertType = payload.alertType;
    },
    clearAlert(state: MetaState) {
      state.alert = undefined;
      state.alertType = undefined;
    },
  },
});

export default metaSlice.reducer;
export const {
  storageLoaded,
  setLang,
  setAlert,
  clearAlert,
} = metaSlice.actions;
export const storageLoadedOninitSelector = (state: AppState) =>
  state.meta.storageLoadedOnInit;
export const langSelector = (state: AppState) => state.meta.lang;
export const alertSelector = (state: AppState) => ({
  alert: state.meta.alert,
  alertType: state.meta.alertType,
});
