import { put, takeLatest } from 'redux-saga/effects'

import {
  FETCH_DATA,
  FETCH_MOVIE,
  FETCH_CATEGORIES,
  FETCH_REVIEWS,
  FETCH_RECOMMENDATIONS,
  FETCH_SIMILAR,
} from './types'

import {
  getData,
  getCategories,
  getMovieRecommendations,
  getMovieReviews,
  getSimilarById,

} from './services'

export function* rootSaga() {
  yield takeLatest(FETCH_DATA.TRIGGER, fetchData)
  yield takeLatest(FETCH_MOVIE.TRIGGER, fetchMovie)
  yield takeLatest(FETCH_CATEGORIES.TRIGGER, fetchCategories)
  yield takeLatest(FETCH_REVIEWS.TRIGGER, fetchRecommendations)
  yield takeLatest(FETCH_RECOMMENDATIONS.TRIGGER, fetchReviews)
  yield takeLatest(FETCH_SIMILAR.TRIGGER, fetchSimilarById)
}

export function* fetchData(action) {
  try {
    const payload = yield getData(action.payload)
    yield put({ type: FETCH_DATA.SUCCESS, payload: payload })
  } catch (e) {
    yield put({ type: FETCH_DATA.FAILURE, payload: e })
  }
}

export function* fetchMovie(action) {
  try {
    const payload = yield getData(action.payload)
    yield put({ type: FETCH_DATA.SUCCESS, payload: payload })
  } catch (e) {
    yield put({ type: FETCH_DATA.FAILURE, payload: e })
  }
}

export function* fetchCategories() {
  try {
    const payload = yield getCategories()

    yield put({ type: FETCH_CATEGORIES.SUCCESS, payload: payload })
  } catch (e) {
    yield put({ type: FETCH_CATEGORIES.FAILURE, payload: e })
  }
}

export function* fetchRecommendations(action) {
  try {
    const payload = yield getMovieRecommendations(action.payload)
    yield put({ type: FETCH_RECOMMENDATIONS.SUCCESS, payload: payload })
  } catch (e) {
    yield put({ type: FETCH_RECOMMENDATIONS.FAILURE, payload: e })
  }
}

export function* fetchReviews(action) {
  try {
    const payload = yield getMovieReviews(action.payload)
    yield put({ type: FETCH_REVIEWS.SUCCESS, payload: payload })
  } catch (e) {
    yield put({ type: FETCH_REVIEWS.FAILURE, payload: e })
  }
}

export function* fetchSimilarById(action) {
  try {
    const payload = yield getSimilarById(action.payload)
    yield put({ type: FETCH_SIMILAR.SUCCESS, payload: payload })
  } catch (e) {
    yield put({ type: FETCH_SIMILAR.FAILURE, payload: e })
  }
}