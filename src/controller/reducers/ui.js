import * as uiActions from "../actions";

const initialState = {
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case uiActions.SET_LOADING_ON:
    case uiActions.SET_LOADING_OFF:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
