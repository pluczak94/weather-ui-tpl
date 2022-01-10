import actions from './actions'

const initialState = {
    currentTemp: null,
    forecastDays: [],
    currentHumidity: null,
};

export default function clientsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_STATE:
            return {...state, ...action.payload};
        default:
            return state
    }
}
