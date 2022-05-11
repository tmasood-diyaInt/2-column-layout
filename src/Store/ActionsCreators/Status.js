import * as action from "../Actions"

export const logIn = () => {
  return dispatch => {
    dispatch({type: action.SET_LOGGED_IN_STATUS, loggedIn: true})
  }
}

export const logOut = () => {
  localStorage.clear()

  return dispatch => {
    dispatch({type: action.SET_LOGGED_IN_STATUS, loggedIn: false})
  }
}