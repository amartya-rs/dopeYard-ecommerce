import { createSlice } from "@reduxjs/toolkit";
import {
   addToCart,
   removeFromCart,
   updateProductQuantity,
} from "../server-requests";

const initialState = {
   cart: [],
   status: "idle",
};

export const cartSlice = createSlice({
   name: "cart",
   initialState,
   extraReducers: {
      [addToCart.fulfilled]: (state, action) => {
         state.status = "fulfilled";
         state.cart = action.payload.cart;
      },
      [addToCart.rejected]: (state, action) => {
         state.status = "rejected";
         console.log(action.payload.errors[0]);
      },
      [removeFromCart.fulfilled]: (state, action) => {
         state.status = "fulfilled";
         state.cart = action.payload.cart;
      },
      [removeFromCart.rejected]: (state, action) => {
         state.status = "rejected";
         console.log(action.payload.errors[0]);
      },
      [updateProductQuantity.fulfilled]: (state, action) => {
         state.status = "fulfilled";
         state.cart = action.payload.cart;
      },
      [updateProductQuantity.rejected]: (state, action) => {
         state.status = "rejected";
         console.log(action.payload.errors[0]);
      },
   },
});

export default cartSlice.reducer;
