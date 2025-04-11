import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './contactsSlice'
import filterReducer from './filtersSlice'

import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'], 
}

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer)

const rootReducer = combineReducers({
  contacts: persistedContactsReducer,
  filters: filterReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export const persistor = persistStore(store)
