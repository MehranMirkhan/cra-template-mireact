import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: UsersState = {
  loading: false,
  me: undefined,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loading(state: UsersState) {
      state.loading = true;
    },
    done(state: UsersState) {
      state.loading = false;
    },
    setMe(state: UsersState, { payload }: PayloadAction<User>) {
      state.me = payload;
    },
    clearMe(state: UsersState) {
      state.me = undefined;
    },
    fetchMe(state: UsersState) {},
    updateMe(state: UsersState, { payload }: PayloadAction<User>) {},
  },
});

export default usersSlice.reducer;
export const {
  loading,
  done,
  setMe,
  clearMe,
  fetchMe,
  updateMe,
} = usersSlice.actions;
export const usersMeSelector = (state: AppState) => state.users.me;
export const usersLoadingSelector = (state: AppState) => state.users.loading;
export const hasMeSelector = (state: AppState) =>
  !!state.users.me && !!state.users.me.username;
