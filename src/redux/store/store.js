import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favourites from "../reducers/favoriti";
import fetchMusic from "../reducers/fetchMusic";
import playerState from "../reducers/playerState";
import ricercaState from "../reducers/ricercaState";

const rootReducer = combineReducers({
  favourites: favourites,
  fetchmusic: fetchMusic,
  playerState: playerState,
  ricerca: ricercaState,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
