import * as actions from "../Actions"


const initialState = {
  elements: []
}

export default function experimentsReducer (state = initialState, action) {
  let newState = {
    ...state
  }
  switch(action.type) {
    case actions.ADD_EXPERIMENT:
      newState.elements.push(action.payload)
      break
    case actions.GET_EXPERIMENTS_SUCCESS:
      newState.elements=[...action.experiments]
      break
    case actions.SET_API_KEY:
      newState.apiKey=action.apiKey
      break
    default:
      return state
  }
  return newState
}