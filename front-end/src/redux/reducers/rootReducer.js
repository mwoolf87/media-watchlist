import { combineReducers } from "redux";
import { apiData } from "./movieDataReducer";

const rootReducer = combineReducers({
  //applying movieData to combineReducers
  apiData
});

export default rootReducer;
