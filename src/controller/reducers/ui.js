import {
  SET_LOADING_ON,
  SET_LOADING_OFF,
} from "../actions";

const initialState = {
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_ON:
      return { ...state, loading: action.payload };
    case SET_LOADING_OFF:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
