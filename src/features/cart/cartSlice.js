import { createSlice } from "@reduxjs/toolkit";
import {
   addToCart,
   removeFromCart,
   updateProductQuantity,
} from "../server-requests";
import { toastSuccess, toastError, toastInfo } from "../../utils/useToast";

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
         toastSuccess("Added to cart");
      },
      [addToCart.rejected]: (state, action) => {
         state.status = "rejected";
         toastError(action.payload?.errors[0]);
      },
      [removeFromCart.fulfilled]: (state, action) => {
         state.status = "fulfilled";
         state.cart = action.payload.cart;
         toastInfo("Removed from cart");
      },
      [removeFromCart.rejected]: (state, action) => {
         state.status = "rejected";
         toastError(action.payload?.errors[0]);
      },
      [updateProductQuantity.fulfilled]: (state, action) => {
         state.status = "fulfilled";
         state.cart = action.payload.cart;
         toastSuccess("Quantity updated");
      },
      [updateProductQuantity.rejected]: (state, action) => {
         state.status = "rejected";
         toastError(action.payload?.errors[0]);
      },
   },
});

export default cartSlice.reducer;
