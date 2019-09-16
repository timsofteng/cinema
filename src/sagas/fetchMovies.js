import { call, put, takeLatest } from "redux-saga/effects";
import { fetchMovies } from "../api-client/fetchMovies";

//worker
function* fetchMoviesWorker(action) {
  try {
    const response = yield call(fetchMovies, action.payload.id, action.payload.page);
    yield put({
      type: "FETCH_MOVIES_SUCCEED",
      payload: { response, id: action.payload.id, reset: action.payload.reset }
    });
  } catch (e) {
    yield put({ type: "FETCH_MOVIES_ERROR", payload: e });
  }
}

//watcher
function* fetchMoviesWatcher() {
  yield takeLatest(["FETCH_MOVIES", "LOAD_PAGE"], fetchMoviesWorker);
}

export default fetchMoviesWatcher;
