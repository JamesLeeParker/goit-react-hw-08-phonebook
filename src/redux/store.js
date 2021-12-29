// import { createStore, combineReducers } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
// import { itemsReducer, filterReducer } from "./contactsReducer";
import { contactsReducer } from "./contactsReducer";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });
const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
});

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  devTools: process.env.NODE_ENV !== "production",
});

// const store = createStore(rootReducer, devToolsEnhancer());

export default store;
