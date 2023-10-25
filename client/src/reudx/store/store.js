/* eslint-disable no-unused-vars */
import {createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "../reducer/reducer"


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // para conectarme con la extension del navegador

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;