import {watchFetchData} from "./report";
import { fork, all } from "redux-saga/effects";
import {watchCreating} from "./request";

function* mainSaga() {
    yield all([
      fork(watchFetchData),
      fork(watchCreating)
    ]);
  }
  
  export default mainSaga;
  