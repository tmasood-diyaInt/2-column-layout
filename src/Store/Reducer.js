import { combineReducers } from 'redux'
import settingsReducer from "./Reducers/SettingsReducer"
import experimentsReducer from "./Reducers/ExperimentsReducer"
import statusReducer from "./Reducers/StatusReducer"
import apikeyReducer from "./Reducers/ApiKeyReducer"
import jobsReducer from "./Reducers/JobsReducer"
import { persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import * as actions from "./Actions"

const rootReducer = (state, action) => {
  if (action.type === actions.SET_LOGGED_IN_STATUS && !action.loggedIn) {
    state = undefined
  }
  return appReducer(state, action)
}

const statusPersistConfig = {
  key: 'status',
  storage: storageSession,
  stateReconciler: hardSet,
  blacklist: ['loggedIn'],
}

const appReducer = combineReducers({
  settings: jobsReducer,
  experiments: apikeyReducer,
  status: persistReducer(statusPersistConfig, statusReducer),
  apikeys: settingsReducer,
  jobs: experimentsReducer,
})

export default rootReducer