import { ADD_TO_PLAYER } from "../../actions/actions";

const initialState = {
  brano: null,
};
const playerState = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      return { ...state, brano: action.payload };

    default:
      return state;
  }
};
export default playerState;
