import {combineReducers} from 'redux'
import forecast from './forecast/reducers'
import location from './location/reducers'
import settings from './settings/reducers'

export default () =>
    combineReducers({
        forecast,
        location,
        settings
    })
