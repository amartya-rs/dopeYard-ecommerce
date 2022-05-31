import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/********** user authentication *********/
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

/********** product data **********/
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

/********** cart **********/
export const addToCart = createAsyncThunk(
   "/cart/addToCart",
   async (card, thunkAPI) => {
      try {
         const response = await axios.post(
            "/api/user/cart",
            {
               product: card,
            },
            {
               headers: {
                  authorization: localStorage.getItem("token"),
               },
            }
         );
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data);
      }
   }
);

export const removeFromCart = createAsyncThunk(
   "/cart/removeFromCart",
   async (card, thunkAPI) => {
      try {
         const response = await axios.delete(`/api/user/cart/${card._id}`, {
            headers: {
               authorization: localStorage.getItem("token"),
            },
         });
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data);
      }
   }
);

export const updateProductQuantity = createAsyncThunk(
   "/cart/updateProductQuantity",
   async ({ productId, value }, thunkAPI) => {
      try {
         const response = await axios.post(
            `/api/user/cart/${productId}`,
            {
               action: {
                  type: value === "INCREMENT" ? "increment" : "decrement",
               },
            },
            {
               headers: {
                  authorization: localStorage.getItem("token"),
               },
            }
         );
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data);
      }
   }
);

/********** wishlist **********/
export const addToWishlist = createAsyncThunk(
   "/wishlist/addToWishlist",
   async (card, thunkAPI) => {
      try {
         const response = await axios.post(
            "/api/user/wishlist",
            {
               product: card,
            },
            {
               headers: {
                  authorization: localStorage.getItem("token"),
               },
            }
         );
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data);
      }
   }
);

export const removeFromWishlist = createAsyncThunk(
   "/wishlist/removeFromWishlist",
   async (card, thunkAPI) => {
      try {
         const response = await axios.delete(`/api/user/wishlist/${card._id}`, {
            headers: {
               authorization: localStorage.getItem("token"),
            },
         });
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data);
      }
   }
);
