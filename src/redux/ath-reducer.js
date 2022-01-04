import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, fetchCurrentUser } from "./Operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = "";
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.currUser = action.payload;
      state.isLoggedIn = true;
    },
  },
});

// export const { register } = authSlice.action;
export default authSlice.reducer;
