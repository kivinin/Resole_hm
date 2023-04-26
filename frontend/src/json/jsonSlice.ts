import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from './api';
import { Customer } from './types/Customer';
import { Order } from './types/Order';

const initialState: State = {
  customers: [],
  services: [],
  products: [],
  carts: [],
  orders: [],
  error: undefined,
};

export const postClient = createAsyncThunk('postClient', (action: Customer) =>
  api.postCustomer(action)
);

export const postOrder = createAsyncThunk('postOrder', (action: Order) =>
  api.postOrder(action)
);

export const getService = createAsyncThunk('getService', () =>
  api.getService()
);
export const getProduct = createAsyncThunk('getProduct', () =>
  api.getProduct()
);

export const removeService = createAsyncThunk(
  'removeService',
  (serviceId: number) => api.removeService(serviceId)
);

export const updateService = createAsyncThunk(
  'updateServiceOrder',
  (updatedService: {
    id: number;
    service_name: string;
    price: string;
    service_description: string;
    service_image: string;
  }) => api.updateService(updatedService)
);

export const addNewService = createAsyncThunk(
  'addNewService',
  (newService: {
    service_name: string;
    price: string;
    service_description: string;
    service_image: string;
  }) => api.addNewService(newService)
);

export const removeProduct = createAsyncThunk(
  'removeProduct',
  (productId: number) => api.removeProduct(productId)
);

export const updateProduct = createAsyncThunk(
  'updateProduct',
  (updatedProduct: {
    id: number;
    product_name: string;
    product_price: string;
    product_description: string;
    product_image: string;
  }) => api.updateProduct(updatedProduct)
);

export const addNewProducts = createAsyncThunk(
  'addNewService222',
  (newProduct: {
    product_name: string;
    product_price: string;
    product_description: string;
    product_image: string;
  }) => api.addNewProduct(newProduct)
);

const jsonSlice = createSlice({
  name: 'json',
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
    builder
      .addCase(postOrder.fulfilled, (state, action) => {
        state.orders.push(action.payload);
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removeService.fulfilled, (state, action) => {
        state.services = state.services.filter(
          (service) => service.id !== +action.payload
        );
      })
      .addCase(removeService.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateService.fulfilled, (state, action) => {
        state.services = state.services.map((service) =>
          service.id === action.payload.id
            ? {
                ...service,
                service_name: action.payload.service_name,
                price: action.payload.price,
                service_description: action.payload.service_description,
                service_image: action.payload.service_image,
              }
            : service
        );
      })
      .addCase(addNewService.fulfilled, (state, action) => {
        state.services = [...state.services, action.payload];
      })
      .addCase(addNewService.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== +action.payload
        );
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.products = state.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                product_name: action.payload.product_name,
                product_price: action.payload.product_price,
                product_description: action.payload.product_description,
                product_image: action.payload.product_image,
              }
            : product
        );
      })
      .addCase(addNewProducts.fulfilled, (state, action) => {
        state.products = [...state.products, action.payload];
      })
      .addCase(addNewProducts.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { addCart } = jsonSlice.actions;

export default jsonSlice.reducer;
