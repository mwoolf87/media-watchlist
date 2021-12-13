import { SET_BOOKS } from "../action-types/bookData-action-types";

//initializing state as an empty array
const initialState = [];

export const apiData = (state = initialState, action) => {
  switch (action.type) {
    //type of SET_BOOKS coming from action-types
    case SET_BOOKS:
      //using spread operator to add objects at the end of the array.
      return (state = [...state, action.payload]);
    default:
      return state;
  }
};
