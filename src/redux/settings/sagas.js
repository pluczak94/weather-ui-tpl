import {all, put, takeEvery} from 'redux-saga/effects'

import actions from './actions'

export function* GET_DATA({payload}) {

    const {date,tempDay,humidity,tempNight}=payload

    yield put({
        type: 'settings/SET_STATE',
        payload: {
            activeTempDay: tempDay,
            activeDay:date,
            activeHumidity:humidity,
            activeTempNight:tempNight,
        },
    })

}

export default function* rootSaga() {
    yield all([
        takeEvery(actions.GET_DATA, GET_DATA),
    ])
}
