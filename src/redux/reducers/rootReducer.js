import { combineReducers } from "redux";
import { apiData } from "./movieDataReducer";
import { modalData } from "./detailedMovieDataReducer";
const rootReducer = combineReducers({
  //applying apiData to combineReducers
  apiData,
  modalData
});

export default rootReducer;
