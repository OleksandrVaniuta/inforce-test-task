import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://651ee0b544a3a8aa476924b7.mockapi.io/';

export const getAllProducts = createAsyncThunk(
  '/getAllProducts',
  async (thunkAPI) => {
    try {
      const response = await axios.get('/inforceTest');
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: 'something go wrong',
      });
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'deleteProduct',
  async (Id, thunkApi) => {
    try {
      await axios.delete(`inforceTest/${Id}`);
      return { id: Id };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  'createProduct',
  async (credentials, thunkApi) => {
    try {
      const response = axios.post('CreateProduct', credentials);

      console.log(response);
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
