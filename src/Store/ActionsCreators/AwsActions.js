import { awsProxy } from '../../Services/AwsProxy'
import * as action from "../Actions"
import {logIn} from "./Status"
export const getApiKeys = () => {
  return dispatch => {
    awsProxy.getApiKeys().then(
        apiKeys => {
          dispatch({ type: action.GET_API_KEYS, apiKeys})
        }
    )
  }
}

export const getCredentials = (tokenId) => {
  return dispatch => {
    awsProxy.getCredentials(tokenId).then(() => {
          dispatch(logIn())
          dispatch(getApiKeys())
          dispatch(listJobs(0, 10))
        }
    )
  }
}

export const listJobs = (startIndex, endIndex) => {
  return dispatch => {
    awsProxy.listJobs(startIndex, endIndex).then(
        (response) => {
          dispatch({ type: action.LIST_JOBS, response})
        }
    )
  }
}

export const createJobScenario = (scenario, clientInfo) => {
  return dispatch => {
    dispatch({type: action.CREATE_JOB, creating: clientInfo?.application_name || scenario?.application_name})
    //dispatch(listJobs())
    awsProxy.createJobScenario(scenario, clientInfo).then(() => {
      dispatch({type: action.CREATE_JOB, creating: false})
      dispatch(listJobs())
    })
  }
}

export const submitResponse = (jobId, response) => {
  return dispatch => {
    awsProxy.submitResponse(jobId, response).then(()=> {
      dispatch(listJobs())
    })
  }
}

export const removeJob = jobId => {
  return dispatch => {
    dispatch({type: action.REMOVE_JOB, jobId})
    awsProxy.removeJob(jobId).then(console.log)
  }
}

export const getExecutable = jobId => {
  return dispatch => {
    dispatch({type: action.GET_EXECUTABLE, jobId})
    awsProxy.getExecutable(jobId).then(console.log)
  }
}