import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { onRegisterUser, getFetchAuthApi } from "../services/auth-api";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
const createUser = createAction("users/user_create");

const userReducer = createReducer({}, (builder) => {
  builder.addCase(createUser, (_, action) => action.payload);
});

const register = createAsyncThunk(
  "user/user_registration",
  async (credentials) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      return data;
    } catch (error) {}
  }
);

const getCurrentUser = createAsyncThunk("user/user_set", async (credential) => {
  try {
    const { data } = await axios.get("/users/current", credential);
    return data;
  } catch (error) {}
});

// const registrateUser = (user) => (dispatch) => {};

const getUser = () => (dispatch) => {
  getFetchAuthApi().then((user) => dispatch(createUser(user)));
};

export { getUser, register, getCurrentUser, createUser };
