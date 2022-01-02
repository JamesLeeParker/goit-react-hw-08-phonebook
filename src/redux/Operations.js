import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { onRegisterUser, getFetchAuthApi } from "../services/auth-api";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
const createUser = createAction("users/user_create");

const token = {
  set(token) {
    axios.defaults.headers.common.Autorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Autorization = "";
  },
};

const userReducer = createReducer({}, (builder) => {
  builder.addCase(createUser, (_, action) => action.payload);
});

const register = createAsyncThunk(
  "user/user_registration",
  async (credentials) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {}
  }
);

const login = createAsyncThunk("user/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logOut = createAsyncThunk("user/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {}
});

// const getCurrentUser = createAsyncThunk("user/user_set", async (credential) => {
//   try {
//     const { data } = await axios.get("/users/current", credential);
//     return data;
//   } catch (error) {}
// });

// // const registrateUser = (user) => (dispatch) => {};

// const getUser = () => (dispatch) => {
//   getFetchAuthApi().then((user) => dispatch(createUser(user)));
// };

export { register, createUser, login, logOut };
