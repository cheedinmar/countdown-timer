import { combineReducers } from "redux";
import ui from "./ui";
import countdown from "./countdown";
import duration from "./duration"

export default combineReducers({
  ui,
  countdown,
  duration,
});
