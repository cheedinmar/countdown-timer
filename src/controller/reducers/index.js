import { combineReducers } from "redux";
import ui from "./ui";
import countdown from "./countdown";

export default combineReducers({
  ui,
  countdown,
});
