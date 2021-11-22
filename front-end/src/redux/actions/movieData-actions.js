import { SET_MOVIES } from "../action-types/movieData-action-types"

// creating action to fire in our movie card onClick Button
export const setMovieData = (data) => {
    return {
        // providing a type to get triggered in our reducer switch statement
        type: SET_MOVIES,
        payload: data
    }
}