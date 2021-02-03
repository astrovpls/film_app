import { combineReducers } from 'redux'
// import filmReducer from './filmReducer'

import fetchCategories from './fetchCategories'
import fetchData from './fetchData'
import fetchMovie from './fetchMovie'
import fetchRecommendations from './fetchRecommendations'
import fetchReviews from './fetchReviews'
import fetchTrailer from './fetchTrailer'

export default combineReducers({
  fetchCategories,
  fetchData,
  fetchMovie,
  fetchRecommendations,
  fetchReviews,
  fetchTrailer,
  // filmReducer,
})
