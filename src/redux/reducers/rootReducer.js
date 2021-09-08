import {DISCOVER_MOVIES, GENRES_MOVIES, MOVIES_BY_GENRE, SEARCH_MOVIE} from "../actions/actionTypes";

export const rootReducer = (state = {movies: [], genres: []}, action) => {
    switch (action.type) {
        case DISCOVER_MOVIES:
            return {...state, movies: [...action.payload]};
        case SEARCH_MOVIE:
            return {...state, movies: [...action.payload]};
        case GENRES_MOVIES:
            return {...state, genres: [...action.payload]};
        case MOVIES_BY_GENRE:
            return {...state, movies: [...action.payload]};
        default:
            return state;
    }
}