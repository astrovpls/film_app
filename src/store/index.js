import { createStore, applyMiddleware } from "redux";
// import reduxThunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import { rootSaga } from './saga.js';

const sagaMiddleware = createSagaMiddleware();

export const initialState = {};

export const middlewares = [sagaMiddleware, /*reduxThunk*/];

export const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore)

export default createStoreWithMiddleware(
  reducers,
  initialState
);

sagaMiddleware.run(rootSaga);