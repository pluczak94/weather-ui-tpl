import {all} from 'redux-saga/effects'
import forecast from './forecast/sagas'
import location from './location/sagas'
import settings from './settings/sagas'

export default function* rootSaga() {
    yield all([forecast(),location(),settings()])
}
