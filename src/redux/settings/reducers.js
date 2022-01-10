import actions from './actions'

const initialState = {
  activeTempDay: null,
  activeDay:null,
  activeHumidity:null,
  activeTempNight:null,
}

export default function clientsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
