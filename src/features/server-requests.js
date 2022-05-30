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
