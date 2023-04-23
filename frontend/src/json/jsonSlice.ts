import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { State } from "./types/State";
import * as api from "./api";
import { Customer } from "./types/Customer";

const initialState: State = {
  customers: [],
  services: [],
  products: [],
  carts: [],
  error: undefined,
};

export const postClient = createAsyncThunk("postClient", (action: Customer) =>
  api.postCustomer(action)
);

export const getService = createAsyncThunk("getService", () =>
  api.getService()
);
export const getProduct = createAsyncThunk("getProduct", () =>
  api.getProduct()
);

const jsonSlice = createSlice({
  name: "json",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const [item] = state.products.filter(
        (product) => product.id === action.payload
      );
      state.carts.push(item);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postClient.fulfilled, (state, action) => {
        state.customers.push(action.payload);
      })
      .addCase(postClient.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(getService.fulfilled, (state, action) => {
        state.services = action.payload;
      })
      .addCase(getService.rejected, (state, action) => {
        state.error = action.error.message;
      });
    builder
      .addCase(getProduct.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { addCart } = jsonSlice.actions

export default jsonSlice.reducer;
