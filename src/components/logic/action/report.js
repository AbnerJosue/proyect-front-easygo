import * as types from "../types/report";

export const startedFetchingData = () => ({
  type: types.REPORT_FETCHING_STARTED,
});

export const completedFetchingData = (data) => ({
  type: types.REPORT_FETCHING_COMPLETED,
  payload:{
    data
  }
});

export const failFetchingData = (error) => ({
  type: types.REPORT_FETCHING_FAILED,
  payload: {
    error,
  },
});