import { SET_BOOKS } from "../action-types/bookData-action-types";

// creating action to fire in our movie card onClick Button
export const setApiData = data => {
  return {
    // providing a type to get triggered in our reducer switch statement
    type: SET_BOOKS,
    payload: data
  };
};
