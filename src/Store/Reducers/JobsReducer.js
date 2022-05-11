import * as actions from "../Actions"

const initialState = {
  jobs: [],
  creating: false,
}

export default function jobsReducer(state = initialState, action) {
  let newState = {...state}
  switch (action.type) {
    case actions.LIST_JOBS:
      newState.jobs = [...action.response]
      break
    case actions.CREATE_JOB:
      newState.creating = action.creating
      break
    case actions.REMOVE_JOB:
      newState.jobs = newState.jobs.filter(job => job.job.jobId !== action.jobId)
      break
    default:
      break
  }
  return newState
}