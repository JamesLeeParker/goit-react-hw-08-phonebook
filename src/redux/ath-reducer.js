import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, fetchCurrentUser } from "./Operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isUserLoadding: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isUserLoadding = false;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isUserLoadding = false;
    },
    [logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isUserLoadding = false;
    },
    [fetchCurrentUser.pending](state, acton) {
      state.isUserLoadding = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isUserLoadding = false;
      state.isLoggedIn = true;
    },
    [fetchCurrentUser.rejected](state, _) {
      state.isUserLoadding = false;
    },
  },
});

// export const { register } = authSlice.action;
export default authSlice.reducer;
