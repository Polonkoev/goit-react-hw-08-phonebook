import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL= 'https://63be41b1585bedcb36aa090d.mockapi.io/contacts/';
// const BASE_URL = 'https://connections-api.herokuapp.com '

const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('https://connections-api.herokuapp.com/users/signup', userData);
      token.set(data.token)
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
    'auth/login',
    async (userData, { rejectWithValue }) => {
      try {
        const { data } = await axios.post('https://connections-api.herokuapp.com/users/login', userData);
        token.set(data.token);
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
      try {
        await axios.post('https://connections-api.herokuapp.com/users/logout');
        token.unset();
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );