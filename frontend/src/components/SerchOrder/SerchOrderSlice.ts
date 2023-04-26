import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from './api';

const initialState: State = {
  service_orders: [],
  error: undefined,
};

export const getServiceOrders = createAsyncThunk('json/getServiceOrders', () =>
  api.getServiceOrder()
);

export const removeServiceOrder = createAsyncThunk(
  'json/removeServiceOrder',
  (serviceorderId: number) => api.removeServiceOrder(serviceorderId)
);

export const updateServiceOrder = createAsyncThunk(
  'json/updateServiceOrder',
  (updatedServiceOrder: {
    id: number;
    status: string;
    before_img: string;
    after_img: string;
    comments: string;
  }) => api.updateServiceOrder(updatedServiceOrder)
);

const SerchOrderSlicer = createSlice({
  name: 'serch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getServiceOrders.fulfilled, (state, action) => {
        state.service_orders = action.payload;
      })
      .addCase(getServiceOrders.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removeServiceOrder.fulfilled, (state, action) => {
        state.service_orders = state.service_orders.filter(
          (service_order) => service_order.id !== +action.payload
        );
      })
      .addCase(removeServiceOrder.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateServiceOrder.fulfilled, (state, action) => {
        state.service_orders = state.service_orders.map((service_order) =>
          service_order.id === action.payload.id
            ? {
                ...service_order,
                status: action.payload.status,
                before_img: action.payload.before_img,
                after_img: action.payload.after_img,
                comments: action.payload.comments,
              }
            : service_order
        );
      });
  },
});

export default SerchOrderSlicer.reducer;
