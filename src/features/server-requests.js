import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/***** user authentication ****/
export const login = createAsyncThunk(
   "/auth/login",
   async ({ email, password }, thunkAPI) => {
      try {
         const response = await axios.post(`/api/auth/login`, {
            email,
            password,
         });
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data);
      }
   }
);

export const signup = createAsyncThunk(
   "/auth/signup",
   async ({ name, email, password }, thunkAPI) => {
      try {
         const response = await axios.post(`/api/auth/signup`, {
            name,
            email,
            password,
         });
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data);
      }
   }
);

/***** product data *****/
export const loadProductData = createAsyncThunk(
   "/product/loadProductData",
   async (thunkAPI) => {
      try {
         const response = await axios.get(`/api/products`);
         return response.data;
      } catch (error) {
         console.error(error);
         return thunkAPI.rejectWithValue(error.response.data);
      }
   }
);

export const loadProductCategories = createAsyncThunk(
   "/product/loadProductCategories",
   async (thunkAPI) => {
      try {
         const response = await axios.get(`/api/categories`);
         return response.data;
      } catch (error) {
         console.error(error);
         return thunkAPI.rejectWithValue(error.response.data);
      }
   }
);
