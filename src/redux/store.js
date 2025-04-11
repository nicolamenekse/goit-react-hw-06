import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './contactsSlice'
import filterReducer from './filtersSlice'

// ✨ Redux Persist kütüphanesinden gelenler
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'], // sadece items alanını sakla
}

// sadece contacts slice'a persist uyguluyoruz
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer)

// reducer'ları birleştiriyoruz
const rootReducer = combineReducers({
  contacts: persistedContactsReducer,
  filters: filterReducer
})

export const store = configureStore({
  reducer: rootReducer
})

// Persistor da lazım olacak:
export const persistor = persistStore(store)
