import {
  FETCH_CATEGORIES as TYPE
} from '../types'
import createFetchReducer from './createFetchReducer'

export default createFetchReducer(TYPE)