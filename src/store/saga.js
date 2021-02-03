import { put, takeLatest } from 'redux-saga/effects'

import {
  FETCH_DATA,
  FETCH_CATEGORIES,
  FETCH_REVIEWS,
  FETCH_RECOMMENDATIONS,
} from './types'

import {
  getData,
  getCategories,
  getMovieRecommendations,
  getMovieReviews
} from './services'

export function* rootSaga() {
  yield takeLatest(FETCH_DATA.TRIGGER, fetchData)
  yield takeLatest(FETCH_CATEGORIES.TRIGGER, fetchCategories)
  yield takeLatest(FETCH_REVIEWS.TRIGGER, fetchRecommendations)
  yield takeLatest(FETCH_RECOMMENDATIONS.TRIGGER, fetchReviews)
}

export function* fetchData(action) {
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