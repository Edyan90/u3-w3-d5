import { ADD_TO_PLAYER } from "../../actions/actions";

const initialState = {
  content: null,
};
const playerState = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      return { ...state, content: action.payload };

    default:
      return state;
  }
};
export default playerState;
