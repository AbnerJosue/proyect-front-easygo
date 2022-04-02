import { combineReducers } from 'redux'
import reportData, * as reportDataSagas from './report';
import requestData, * as requestDataSagas from './request';

const reducer = combineReducers({
    reportData,
    requestData
})

export default reducer;

export const getIsFetching = state => reportDataSagas.getIsFetching(state.reportData);
export const getIsData = state => reportDataSagas.getIsData(state.reportData);
export const getIsFailed = state => reportDataSagas.getIsFailed(state.reportData);


export const createdIsStarted = state => requestDataSagas.createdIsStarted(state.requestData);
export const createdIsData = state => requestDataSagas.createdIsData(state.requestData);
export const createdIsFailed = state => requestDataSagas.createdIsFailed(state.requestData);
