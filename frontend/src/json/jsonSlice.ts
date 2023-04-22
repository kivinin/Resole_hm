import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from './api';

const initialState: State = {
  jsons: [],
  error: undefined,
};

export const getUsers = createAsyncThunk('json/getUser', () => api.getUsers());

export const removeUser = createAsyncThunk('json/removeUser', (userId: number) =>
  api.removeUser(userId)
);

const jsonSlice = createSlice({
  name: 'json',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.jsons = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.jsons = state.jsons.filter((json) => json.id !== action.payload);
      })
      .addCase(removeUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default jsonSlice.reducer;
