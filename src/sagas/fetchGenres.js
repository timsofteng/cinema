import { call, put, takeEvery } from "redux-saga/effects";
import { fetchGenres } from "../api-client/fetchGenres";
import {convertArrToOblWithKey} from "../utils";

//worker
function* fetchGenresWorker(action) {
    try {
        const response = yield call(fetchGenres);
        const convertResult = yield convertArrToOblWithKey(response.data.genres);
        yield put({
            type: "FETCH_GENRES_SUCCEED",
            payload: { convertResult }
        });
    } catch (e) {
        yield put({ type: "FETCH_GENRES_ERROR", payload: e });
    }
}

//watcher
function* fetchGenresWatcher() {
    yield takeEvery("FETCH_GENRES", fetchGenresWorker);
}

export default fetchGenresWatcher;
