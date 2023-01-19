import contactsReducer from './contacts/contactsSlise';
import  filterSlice  from './filter/filterSlice';
import authSlise from './auth/authSlise';
import {configureStore} from '@reduxjs/toolkit';
 export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterSlice,
        auth: authSlise,
        
    }
 })