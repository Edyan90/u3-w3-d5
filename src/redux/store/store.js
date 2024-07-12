import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favourites from "../reducers/favoriti";
import fetchReducer from "../reducers/fetchReducer";

const rootReducer = combineReducers({
  favourites: favourites,
  fetchmusic: fetchReducer,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
