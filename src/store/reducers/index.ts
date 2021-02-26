import { combineReducers } from 'redux'

import fetchCategories from './fetchCategories'
import fetchData from './fetchData'
import fetchMovie from './fetchMovie'
import fetchRecommendations from './fetchRecommendations'
import fetchReviews from './fetchReviews'
import fetchTrailer from './fetchTrailer'
import fetchSimilar from './fetchSimilar'

const rootReducer = combineReducers({
  fetchCategories,
  fetchData,
  fetchMovie,
  fetchRecommendations,
  fetchReviews,
  fetchTrailer,
  fetchSimilar,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>