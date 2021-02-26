import {
  FETCH_DATA as TYPE
} from '../types'
import createFetchReducer from './createFetchReducer'

import { IMovieList } from '../services'

export default createFetchReducer<IMovieList>(TYPE)