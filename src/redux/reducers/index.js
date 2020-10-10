import { combineReducers } from "redux";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import directoryReducer from "./directoryReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import shopReducer from "./shopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  Cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
