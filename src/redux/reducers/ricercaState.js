import { RICERCA } from "../../actions/ricercaAction";

const initialState = {
  ricerca: "",
};
const ricercaState = (state = initialState, action) => {
  switch (action.type) {
    case RICERCA:
      return { ...state, ricerca: action.payload };

    default:
      return state;
  }
};
export default ricercaState;
