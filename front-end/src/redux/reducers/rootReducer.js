import { combineReducers } from "redux"
import { movieData } from "./movieDataReducer"



const rootReducer = combineReducers({
    //applying movieData to combineReducers
    movieData,
})

export default rootReducer