import * as actions from "../Actions"

const initialState = []

export default function apikeyReducer(state = initialState, action) {
  let newState = [...state]
  switch (action.type) {
    case actions.GET_API_KEYS:
      newState = [...action.apiKeys]
      break
    default:
      break
  }
  return newState
}