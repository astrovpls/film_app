import {
  FETCH_REVIEWS as TYPE
} from '../types'
import createFetchReducer from './createFetchReducer'

export default createFetchReducer(TYPE)