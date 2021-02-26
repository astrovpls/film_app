import { IMovieList } from '../services'
import {
  FETCH_SIMILAR as TYPE
} from '../types'
import createFetchReducer from './createFetchReducer'

export default createFetchReducer<IMovieList>(TYPE)