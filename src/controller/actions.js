export const PAGE_LOADED = "[ui] page loaded";
export const SET_LOADING_ON = "[ui] set loading on";
export const SET_LOADING_OFF = "[ui] set loading off";
export const LOAD_COUNTDOWN = "[countdown] load";
export const LOAD_COUNTDOWN_SUCCESS = "[countdown] load success";
export const LOAD_COUNTDOWN_FAILURE = "[countdown] load failure";
export const GET_COUNTDOWN_DURATION = "[countdown] load failure";

export const pageLoaded = {
  type: PAGE_LOADED,
};

export const loadCountdown = {
  type: LOAD_COUNTDOWN,
};


export const loadCountdownSuccess = (Countdown) => ({
  type: LOAD_COUNTDOWN_SUCCESS,
  payload: Countdown,
});

export const loadCountdownFailure = (error) => ({
  type: LOAD_COUNTDOWN_FAILURE,
  payload: error,
});
