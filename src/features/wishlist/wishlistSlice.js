import { createSlice } from "@reduxjs/toolkit";
import { addToWishlist, removeFromWishlist } from "../server-requests";
import { toastSuccess, toastError, toastInfo } from "../../utils/useToast";

const initialState = {
   wishlist: [],
   status: "idle",
};

export const wishlistSlice = createSlice({
   name: "wishlist",
   initialState,
   extraReducers: {
      [addToWishlist.fulfilled]: (state, action) => {
         state.status = "fulfilled";
         state.wishlist = action.payload.wishlist;
         toastSuccess("Added to wishlist");
      },
      [addToWishlist.rejected]: (state, action) => {
         state.status = "rejected";
         toastError(action.payload?.errors[0]);
      },
      [removeFromWishlist.fulfilled]: (state, action) => {
         state.status = "fulfilled";
         state.wishlist = action.payload.wishlist;
         toastInfo("Removed from wishlist");
      },
      [removeFromWishlist.rejected]: (state, action) => {
         state.status = "rejected";
         toastError(action.payload?.errors[0]);
      },
   },
});

export default wishlistSlice.reducer;
