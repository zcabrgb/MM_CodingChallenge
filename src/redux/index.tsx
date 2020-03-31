import {productsReducer} from './reducer';
import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({machines: productsReducer});
const middlewares = [thunk];
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);
export default store;
