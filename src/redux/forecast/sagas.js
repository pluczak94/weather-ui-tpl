import {all, call, put, takeEvery} from 'redux-saga/effects'

import actions from './actions'
import * as apiService from '../../services/forecastApi.js'
import {getTempDay} from "../../utils/Utils";


export function* GET_DATA({payload}) {

    const {currentLongitude, currentLatitude} = payload;
    const response = yield call(apiService.callApi, currentLatitude, currentLongitude);
    yield put({
        type: 'forecast/SET_STATE',
        payload: {
            currentTemp: response.currentTemp,
            forecastDays: response.forecastDays,
            currentHumidity: response.currentHumidity
        },
    });

    yield put({
        type: 'settings/SET_STATE',
        payload: {
            activeTempDay: getTempDay(response.currentTemp),
            activeDay: "Current",
            activeHumidity: response.currentHumidity,
        },
    })

}

export default function* rootSaga() {
    yield all([
        takeEvery(actions.GET_DATA, GET_DATA),
    ])
}
