import { IMovie } from '../services'
import {
  FETCH_MOVIE as TYPE
} from '../types'
import createFetchReducer from './createFetchReducer'


export default createFetchReducer<IMovie>(TYPE)