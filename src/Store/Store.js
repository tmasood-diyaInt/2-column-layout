import {applyMiddleware, createStore, compose} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import thunk from 'redux-thunk'
import rootReducer from './Reducer'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootPersistConfig = {
  key: 'root',
  storage: storageSession,
  stateReconciler: hardSet,
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))

const persistor = persistStore(store)

export default { store, persistor }