import { createSlice } from "@reduxjs/toolkit";
import { register } from "./Operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogedin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogedin = true;
    },
  },
});

export { authSlice };
