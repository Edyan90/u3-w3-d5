import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favourites from "../reducers/favoriti";
import fetchMusic from "../reducers/fetchMusic";

const rootReducer = combineReducers({
  favourites: favourites,
  fetchmusic: fetchMusic,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
