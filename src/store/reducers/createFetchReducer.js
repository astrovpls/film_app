export default (TYPE) => {

  const INITIAL_STATE = {
    data: {},
    loading: false, //Store of loading status.
    error: '', //Store errors.
  }

  const reducer = (state = INITIAL_STATE, action) => {
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

  return reducer
}