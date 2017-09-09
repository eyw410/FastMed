import { compose, createStore, applyMiddleware } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducer from './reducers/rootReducer'
import logger from 'redux-logger'

export const store = createStore(reducer, applyMiddleware(logger), autoRehydrate())
export const persistor = persistStore(store, {storage: AsyncStorage})
// persistor.purge()

export default store