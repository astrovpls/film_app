import {
  FETCH_TRAILER as TYPE
} from '../types'

// Initial state.
const INITIAL_STATE = {
  data: [], //Store of all categories from movies.
  loading: false, //Store of loading status.
  error: '', //Store errors.
}

// Export a function with a initial state and a action,
// and return a specific case.

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE.TRIGGER:
      return {
        ...state,
        loading: true,
      }
    case TYPE.SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case TYPE.FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}