import {all,call,put, takeEvery} from 'redux-saga/effects'

import actions from './actions'
import * as locationService   from '../../services/locationService.js'


export function* GET_DATA() {

    const result = yield call(locationService.currentLocation)
    yield put({
        type: 'location/SET_STATE',
        payload: {
            currentLatitude : Math.round(result.coords.latitude),
            currentLongitude : Math.round(result.coords.longitude)
        },
    })
    yield put({
        type: 'forecast/GET_DATA',
        payload: {
            currentLatitude : Math.round(result.coords.latitude),
            currentLongitude : Math.round(result.coords.longitude)
        },
    })

}



export default function* rootSaga() {
    yield all([
        takeEvery(actions.GET_DATA, GET_DATA),
        GET_DATA()
    ])
}
