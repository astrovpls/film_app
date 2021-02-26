import {
  FETCH_RECOMMENDATIONS as TYPE
} from '../types'
import createFetchReducer from './createFetchReducer'

export default createFetchReducer(TYPE)