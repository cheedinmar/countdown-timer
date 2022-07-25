import {
  LOAD_COUNTDOWN_SUCCESS,
  LOAD_COUNTDOWN,
  LOAD_COUNTDOWN_FAILURE,
} from "../actions";
const initialState = {
  countdown: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COUNTDOWN_SUCCESS:
      return { countdown: action.payload, error: null };
    case LOAD_COUNTDOWN_FAILURE:
      return { ...state, error: action.payload };
    case LOAD_COUNTDOWN:
      return { countdown: action.payload, error: null };
    default:
      return state;
  }
};


export default reducer;
