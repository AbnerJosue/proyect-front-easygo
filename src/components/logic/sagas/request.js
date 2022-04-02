import * as types from "../types/requests";
import { put, takeEvery } from "redux-saga/effects";
import * as actions from "../action/request";
import {
    createdData,
} from "../../services/request";


function* createdDatas(action) {
  try {
    const response = yield createdData(action.payload.data);
    const { data, error } = response;
    console.log(data)
    if (error === null) {
      yield put(actions.createdCompletedData(data));
    } else {
      yield put(
        actions.createdFailData("HA OCURRIDO UN ERROR AL CREAR LOS DATOS")
      );
    }
  } catch (error) {
    console.error(error);
    yield put(
      actions.createdFailData("HA OCURRIDO UN ERROR AL CREAR LOS DATOS")
    );
  }
}

export function* watchCreating() {
  yield takeEvery(types.CREATE_REQUEST_STARTED, createdDatas);
}
