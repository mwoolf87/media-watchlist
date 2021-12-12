import { SET_DETAILEDMOVIES } from "../action-types/detailedMovieData-action-types";

//initializing state as an empty array
const initialState = [];

export const modalData = (state = initialState, action) => {
  switch (action.type) {
    //type of SET_DETAILEDMOVIES coming from action-types
    case SET_DETAILEDMOVIES:
      //using spread operator to add objects at the end of the array.
      return (state = action.payload);
    default:
      return state;
  }
};
