import { createStore, applyMiddleware } from "redux";
// import movieReducer from "./reducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import combineReducers from './combineReducers';

const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))


export default store;