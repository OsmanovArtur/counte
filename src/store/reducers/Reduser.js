import { combineReducers } from "redux";
import counter1 from "../reducers/Counter 1";
import counter2 from "../reducers/Counter 2";
export default combineReducers({
  counter1,
  counter2,
});
