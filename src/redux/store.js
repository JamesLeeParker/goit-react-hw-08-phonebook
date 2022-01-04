// import { createStore, combineReducers } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { itemsReducer, filterReducer } from "./contactsReducer";
import { contactsReducer } from "./contactsReducer";
import authSlice from "./ath-reducer";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });
const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
});

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    contacts: contactsReducer,
    currUser: authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  devTools: process.env.NODE_ENV !== "production",
});

// const store = createStore(rootReducer, devToolsEnhancer());

const persistor = persistStore(store);

export { store, persistor };
