import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favourites from "../reducers/favoriti";
import fetchMusic from "../reducers/fetchMusic";
import playerState from "../reducers/playerState";

const rootReducer = combineReducers({
  favourites: favourites,
  fetchmusic: fetchMusic,
  playerState: playerState,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
