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
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios('/contacts', userData);
      token.set(data.token)
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deletecontact',
  async (id, { rejectWithValue }) => {
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
  async (userData ,contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/contacts`,userData, contact);
      token.set(data.token)
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
