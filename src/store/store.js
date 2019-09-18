import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import createSagaMiddleware from "redux-saga";

import moviesReducer from "./movies/reducer";
import modalReducer from "./modal/reducer";

const reducers = { moviesReducer, modalReducer, forms: formReducer };

const rootReducer = combineReducers(reducers);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export { store, sagaMiddleware };
