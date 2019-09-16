import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store, sagaMiddleware } from "./store/store";

import "reset-css";
import "./styles/style.scss";
import App from "./components/App";
import fetchGenresWatcher from "./sagas/fetchGenres";
import fetchMoviesWatcher from "./sagas/fetchMovies";

sagaMiddleware.run(fetchGenresWatcher)
sagaMiddleware.run(fetchMoviesWatcher);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
