import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State, User } from './types/types';
import * as api from './api';

const initialState: State = {
  user: {},
  error: undefined,
};

export const loginUser = createAsyncThunk('auth/sign-in', (action: User) =>
  api.login(action)
);
export const verificationUser = createAsyncThunk('auth/verification', () =>
  api.session()
);
export const logoutUser = createAsyncThunk('auth/logout', () => api.logout());

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verificationUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(verificationUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = {};
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
