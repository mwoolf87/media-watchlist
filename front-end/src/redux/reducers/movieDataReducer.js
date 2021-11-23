import { SET_MOVIES } from "../action-types/movieData-action-types";


//initializing state as an empty array
const initialState = []


export const movieData = (state = initialState, action) => {
    switch(action.type) {
        //type of SET_MOVIES coming from action-types
        case SET_MOVIES:
            //using spread operator to add objects at the end of the array.
            return state = [...state, action.payload]
        default:
            return state;
    }
}