import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signup, login, logout, currentUser } from './auth_operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoading: false,
  error: null,
  isCurrentUser: false,
  isLoginIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder

      .addCase(signup.fulfilled, (state, { payload: user, token }) => {
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.error = null;
      })

      .addCase(login.fulfilled, (state, { payload: user }) => {
        state.isLoading = false;
        state.user = user.user;
        state.token = user.token;
        state.error = null;
        state.isLoginIn = true;
      })

      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.token = null;
        state.user = { name: '', email: '' };
        state.isLoginIn = false;
      })
      .addCase(currentUser.pending, state => {
        state.isLoading = true;
        state.isCurrentUser = true;
        state.isLoginIn = false;
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload;
        state.isCurrentUser = false;
        state.isLoginIn = true;
      })
      .addCase(currentUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isCurrentUser = false;
        state.isLoginIn = false;
      })

      .addMatcher(
        isAnyOf(signup.pending, login.pending, logout.pending),
        state => {
          state.isLoading = true;
          state.error = null;
          state.isLoginIn = false;
        }
      )
      .addMatcher(
        isAnyOf(signup.rejected, login.rejected, logout.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
          state.isLoginIn = false;
        }
      );
  },
});

export default authSlice.reducer;
