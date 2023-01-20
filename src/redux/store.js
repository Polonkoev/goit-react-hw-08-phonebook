import contactsReducer from './contacts/contactsSlise';
import filterSlice from './filter/filterSlice';
import authSlise from './auth/authSlise';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
whitelist: ['token'],


};



export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice,
    auth: persistReducer(authPersistConfig, authSlise),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
