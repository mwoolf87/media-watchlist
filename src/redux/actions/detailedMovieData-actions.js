import { SET_DETAILEDMOVIES } from "../action-types/detailedMovieData-action-types";

// creating action to fire in our movie card onClick Button
export const setModalData = data => {
  return {
    // providing a type to get triggered in our reducer switch statement
    type: SET_DETAILEDMOVIES,
    payload: data
  };
};
