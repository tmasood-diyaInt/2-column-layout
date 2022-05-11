import * as actions from "../Actions"

const initialState = {
  userName: "unknown"
}

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_USER_NAME:
      return {
        ...state,
        userName: action.payload
      }
    default:
      return state
  }
}