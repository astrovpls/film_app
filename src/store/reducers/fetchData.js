import {
  FETCH_DATA as TYPE
} from '../types'
import createFetchReducer from './createFetchReducer'

export default createFetchReducer(TYPE)