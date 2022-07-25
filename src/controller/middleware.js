
import * as uiActions from "./actions";

const loadCountdownFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type === uiActions.LOAD_COUNTDOWN) {
      try {
        dispatch(uiActions.setLoading(true));
        const countdown = await api.countdown.getAll();
        dispatch(uiActions.loadContdownSuccess(countdown));
        dispatch(uiActions.setLoading(false));
      } catch (error) {
        dispatch(uiActions.loadContdownFailure(error));
      }
    }
  };


export default [loadCountdownFlow];
