import * as types from "../types/report";
import { combineReducers } from "redux";

const isStartedCreating = (state = false, action) => {
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

const isDataCrating = (state = null, action) => {
    switch (action.type) {
        case types.REPORT_FETCHING_COMPLETED: {
            console.log('HOLA ')
            return action.payload.data;
        }
        default: {
            return state;
        }
    }
};

const isFailedCreated = (state = false, action) => {
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

const requestData = combineReducers({
    isStartedCreating,
    isFailedCreated,
    isDataCrating
});

export default requestData;
export const createdIsStarted = (state) => state.isStartedCreating;
export const createdIsData = (state) => state.isDataCrating;
export const createdIsFailed = (state) => state.isFailedCreated;