import * as types from "../types/requests";

export const startedCretedData = (data) => ({
  type: types.CREATE_REQUEST_STARTED,
  payload:{
    data
  }
});

export const createdCompletedData = (data) => ({
  type: types.CREATE_REQUEST_COMPLETED,
  payload:{
    data
  }
});

export const createdFailData = (error) => ({
  type: types.CREATE_REQUEST_FAILED,
  payload: {
    error,
  },
});