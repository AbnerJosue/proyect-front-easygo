import * as types from "../types/report";
import { put, takeEvery } from "redux-saga/effects";
import * as actions from "../action/report";
import {
    getData,
} from "../../services/getData";


function* fetchGetData(action) {
  try {
    const response = yield getData();
    const { data, error } = response;
    console.log(data)
    if (error === null) {
      yield put(actions.completedFetchingData(data));
    } else {
      yield put(
        actions.failFetchingData("HA OCURRIDO UN ERROR AL OBTENER LOS DATOS")
      );
    }
  } catch (error) {
    console.error(error);
    yield put(
      actions.failFetchingData("HA OCURRIDO UN ERROR AL OBTENER LOS DATOS")
    );
  }
}

export function* watchFetchData() {
  yield takeEvery(types.REPORT_FETCHING_STARTED, fetchGetData);
}
