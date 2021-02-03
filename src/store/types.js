import { createRoutine } from 'redux-saga-routines';

// export const FETCH_DATA = "FETCH_DATA";
// export const FETCH_MOVIE = "FETCH_MOVIE";
// export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
// export const FETCH_REVIEWS = "FETCH_REVIEWS";
// export const FETCH_TRAILER = "FETCH_TRAILER";
// export const FETCH_RECOMMENDATIONS = "FETCH_RECOMMENDATIONS";
// export const LOADING = "LOADING";
// export const ERROR = "ERROR";

export const FETCH_DATA = createRoutine('FETCH_DATA');
export const FETCH_MOVIE = createRoutine('FETCH_MOVIE');
export const FETCH_CATEGORIES = createRoutine('FETCH_CATEGORIES');
export const FETCH_REVIEWS = createRoutine('FETCH_REVIEWS');
export const FETCH_TRAILER = createRoutine('FETCH_TRAILER');
export const FETCH_RECOMMENDATIONS = createRoutine('FETCH_RECOMMENDATIONS');