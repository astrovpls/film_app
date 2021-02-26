import { Reducer } from 'redux';

interface ActionTypes {
  TRIGGER: string,
  SUCCESS: string,
  FAILURE: string,
}

export default <T>(TYPE: ActionTypes) => {

  interface Action {
    payload: T
    error: string
    type: any
  }
  const initialState = {
    data: {} as T,
    loading: false, //Store of loading status.
    error: '', //Store errors.
  }

  const reducer: Reducer<typeof initialState, Action> = (state = initialState, action) => {
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
          error: action.error,
          loading: false,
        }
      default:
        return state
    }
  }

  return reducer
}