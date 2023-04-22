import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { State } from "./types/State";
import * as api from "./api";
import { Customer } from "./types/Customer";

const initialState: State = {
  customers: [],
  error: undefined,
};

export const postClient = createAsyncThunk("postClient", (action:Customer) =>
  api.postCustomer(action)
);

const jsonSlice = createSlice({
  name: "json",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postClient.fulfilled, (state, action) => {
      state.customers.push(action.payload);
    })
    .addCase(postClient.rejected, (state, action) => {
      state.error = action.error.message;
    });
    // .addCase(removeUser.fulfilled, (state, action) => {
    //   state.jsons = state.jsons.filter((json) => json.id !== action.payload);
    // })
    // .addCase(removeUser.rejected, (state, action) => {
    //   state.error = action.error.message;
    // });
  },
});


export default jsonSlice.reducer;
