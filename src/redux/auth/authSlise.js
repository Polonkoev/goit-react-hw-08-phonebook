import { createSlice } from '@reduxjs/toolkit';
import { signup, login } from './auth_operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, { payload: user, token }) => {
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.error = null;
      })
      .addCase(signup.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload: user }) => {
        state.isLoading = false;
        state.user = user;
        state.token = user.token;
        state.error = null;
        console.log(user);
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
