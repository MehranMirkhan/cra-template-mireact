import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: AuthState = {
  loading: false,
  token: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loading(state: AuthState) {
      state.loading = true;
    },
    done(state: AuthState) {
      state.loading = false;
    },
    setToken(state: AuthState, { payload }: PayloadAction<SigninRes>) {
      state.token = payload;
    },
    clearToken(state: AuthState) {
      state.token = undefined;
    },
    signup(state: AuthState, { payload }: PayloadAction<SignupReq>) {},
    signin(state: AuthState, { payload }: PayloadAction<SigninReq>) {},
    signout(state: AuthState) {},
    changePassword(
      state: AuthState,
      { payload }: PayloadAction<ChangePasswordReq>
    ) {},
  },
});

export default authSlice.reducer;
export const {
  loading,
  done,
  setToken,
  clearToken,
  signup,
  signin,
  signout,
  changePassword,
} = authSlice.actions;
export const authTokenSelector = (state: AppState) => state.auth.token;
export const authLoadingSelector = (state: AppState) => state.auth.loading;
export const hasTokenSelector = (state: AppState) => !!state.auth.token;
