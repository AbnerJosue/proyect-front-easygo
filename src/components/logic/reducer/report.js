import * as types from "../types/report";
import { combineReducers } from "redux";

const isFetchingData = (state = false, action) => {
    switch (action.type) {
      case types.REPORT_FETCHING_STARTED: {
        return true;
      }
  
      case types.REPORT_FETCHING_COMPLETED: {
        return false;
      }
  
      case types.REPORT_FETCHING_FAILED: {
        return false;
      }
  
      default: {
        return state;
      }
    }
  };
  
  const isData = (state = null, action) => {
    switch (action.type) {
      case types.REPORT_FETCHING_COMPLETED: {
        return action.payload.data;
      }
      default: {
        return state;
      }
    }
  };
  
  const isFailed = (state = false, action) => {
    switch (action.type) {
      case types.REPORT_FETCHING_STARTED: {
        return false;
      }
  
      case types.REPORT_FETCHING_COMPLETED: {
        return false;
      }
  
      case types.REPORT_FETCHING_FAILED: {
        return true;
      }
  
      default: {
        return state;
      }
    }
  };

  const reportData = combineReducers({
    isFetchingData,
    isData,
    isFailed,
  });
  
  export default reportData;
  export const getIsFetching = (state) => state.isFetchingData;
  export const getIsData = (state) => state.isData;
  export const getIsFailed = (state) => state.isFailed;