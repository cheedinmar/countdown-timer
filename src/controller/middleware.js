
import * as uiActions from "./actions";
import {
  loadCountdownFailure,
  loadCountdownSuccess,
  LOAD_COUNTDOWN,
  PAGE_LOADED,
} from "./actions";

const loadCountdownFlow = ({ api , log}) => ({ dispatch }) =>(next) => async (action) => {
    next(action);
    if (action.type == LOAD_COUNTDOWN) {
      try {
        dispatch(uiActions.setLoading(true));
        const countdown = await api.getAll();
        dispatch(loadCountdownSuccess(countdown));
        dispatch(uiActions.setLoading(false));
      } catch (error) {
        dispatch(loadCountdownFailure(error));
      }
    }
  };

 const pageLoadedFlow = ({log}) => ({ dispatch }) => next => action => {
    next(action);
    if (action.type === PAGE_LOADED) {
      dispatch(uiActions.loadCountdown);
    }
}


export default [loadCountdownFlow, pageLoadedFlow];
