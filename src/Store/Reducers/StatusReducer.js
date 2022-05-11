import * as actions from "../Actions"

const initialState = {
  loggedIn: false
}

export default function statusReducer (state = initialState, action) {
  let newState = {
    ...state
  }
  switch (action.type) {
    case actions.SET_LOGGED_IN_STATUS:
      newState.loggedIn = action.loggedIn
      break
    default:
      break
  }
  return newState
}