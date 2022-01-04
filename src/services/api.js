import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const BASE_URL = "https://61c49e84f1af4a0017d996d1.mockapi.io/api/v1/contacts";
const BASE_URL = "https://connections-api.herokuapp.com";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

const getData = async (stateToken) => {
  try {
    const { data } = await axios.get("/contacts");
    // token.set(stateToken);
    return data;
  } catch (error) {}
};
// const fetchData = async (stateToken) => {
//   try {
//     const { data } = await axios.get("/contacts");
//     // token.set(stateToken);
//     return data;
//   } catch (error) {}
// };

// const getData = (propsToken) => fetchData(propsToken);

// getData().then(console.log);

const saveItem = async (item, stateToken) => {
  try {
    const { data } = await axios.post("/contacts", item);
    // token.set(stateToken);
    return data;
  } catch (error) {}
};
// const saveItem = (item, options = {}) => {
//   const finalOptions = {
//     method: "POST",
//     body: JSON.stringify(item),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   };
//   fetch(BASE_URL, finalOptions);
// };

// const saveItem = (item, options = {}) => {
//   const finalOptions = {
//     method: "POST",
//     body: JSON.stringify(item),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//     ...options,
//   };
//   return fetchData(finalOptions);
// };

// const deleteItem = (id, options = {}) =>
//   fetchData(`/${id}`, { method: "DELETE", ...options });

const deleteItem = async (id) => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`, id);
    return data;
  } catch (error) {}
  // fetch(`${BASE_URL}/contacts/${id}`, { method: "DELETE" });
};

// const deleteItem = (id) => {
//   fetch(`${BASE_URL}/contacts/${id}`, { method: "DELETE" });
// };

export { getData, saveItem, deleteItem };
