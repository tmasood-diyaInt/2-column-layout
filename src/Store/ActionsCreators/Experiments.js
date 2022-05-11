import { api } from '../../Services/Api';
import * as action from "../Actions";

export const getAll = () => {
  return dispatch => {
    dispatch({ type:  action.GET_EXPERIMENTS});
    api.get("experiments")
        .then(
            respons => dispatch({type: action.GET_EXPERIMENTS_SUCCESS, experiments: respons.data }),
            err => dispatch({type: action.GET_EXPERIMENTS_FAILURE, err})
        )
  }
}

export const getExperiment = () => {
  return dispatch => {
    dispatch({type: action.GET_EXPERIMENT});
    api.get("experiment")
        .then(
            respons => dispatch({type: action.GET_EXPERIMENT_SUCCESS, experiments: respons.data }),
            err => dispatch({type: action.GET_EXPERIMENT_FAILURE, err})
        )
  }
}