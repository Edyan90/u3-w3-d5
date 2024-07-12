export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_MUSIC = "GET_MUSIC";

export const removeFromFavourite = (fav) => ({ type: REMOVE_FROM_FAVOURITE, payload: fav });
export const addToFavourite = (fav) => ({ type: ADD_TO_FAVOURITE, payload: fav });

export const ADD_TO_PLAYER = "ADD_TO_PLAYER";

export const addToPlayer = (track) => ({
  type: ADD_TO_PLAYER,
  payload: track,
});
