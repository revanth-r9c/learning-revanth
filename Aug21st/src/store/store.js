import {createStore, combineReducers, applyMiddleware} from "redux";
import { thunk } from "redux-thunk";
import CountReducer from "../reducers/CountReducer";
import TodosReducer from "../reducers/TodosReducer";
import exampleMiddleware from "../middlewares/ExampleMiddleware";

let store=createStore(
    combineReducers({count:CountReducer, todos:TodosReducer}),
    applyMiddleware(thunk, exampleMiddleware),
);

export default store;