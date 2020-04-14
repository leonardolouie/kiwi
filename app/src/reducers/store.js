import {createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from "./userReducer";
import thunk from 'redux-thunk';


export default createStore(combineReducers({userReducer}),applyMiddleware(thunk));

