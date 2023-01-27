import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL =
//   'https://63be41b1585bedcb36aa090d.mockapi.io/contacts/';

// const BASE_URL = 'https://connections-api.herokuapp.com '

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

  const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (userData, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios('/contacts', userData);
      const tokenLS = getState().auth.token;
      token.set(tokenLS);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deletecontact',
  async (id, { rejectWithValue, getState }) => {
    const tokenLS = getState().auth.token;
      token.set(tokenLS);
    try {
      await axios.delete(`/contacts/${id}`);

      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue, getState }) => {
    const tokenLS = getState().auth.token;
      token.set(tokenLS);
    try {
      const { data } = await axios.post(`/contacts`,contact);
      
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
