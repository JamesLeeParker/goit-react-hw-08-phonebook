import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  deleteContact,
  addContact,
  setContacts,
  onFilter,
} from "./contactsActions";

const itemsReducer = createReducer([], (builder) => {
  builder
    .addCase(setContacts, (_, action) => action.payload)
    .addCase(addContact, (state, action) => [...state, action.payload])
    .addCase(deleteContact, (state, action) =>
      state.filter((contact) => contact.id !== action.payload)
    );
});

const filterReducer = createReducer("", {
  [onFilter]: (_, action) => action.payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export { contactsReducer };
// export { itemsReducer, filterReducer };
