import {
  LOAD_COUNTDOWN_SUCCESS,
  LOAD_COUNTDOWN,
  LOAD_COUNTDOWN_FAILURE,
  GET_COUNTDOWN_DURATION,
} from "../actions";
import UseCountdown from "../../views/UseCountdown";
const initialState = {
    hours: null,
    minutes: null,
    seconds: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTDOWN_DURATION:
      const endTime = new Date().getTime() + action.payload;
      console.log(endTime, 'endtime')
      const [timeLeft, setEndTime] = UseCountdown(endTime);
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(timeLeft / 60000) % 60;
      const seconds = Math.floor(timeLeft / 1000) % 60;
      return {
        ...state,
        time: { hours: hours, minutes: minutes, seconds: seconds },
      };
    default:
      return state;
  }
};

export default reducer;
