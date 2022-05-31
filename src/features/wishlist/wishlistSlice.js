import { createSlice } from "@reduxjs/toolkit";
import { addToWishlist, removeFromWishlist } from "../server-requests";

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
      },
      [addToWishlist.rejected]: (state, action) => {
         state.status = "rejected";
         console.log(action.payload.errors[0]);
      },
      [removeFromWishlist.fulfilled]: (state, action) => {
         state.status = "fulfilled";
         state.wishlist = action.payload.wishlist;
      },
      [removeFromWishlist.rejected]: (state, action) => {
         state.status = "rejected";
         console.log(action.payload.errors[0]);
      },
   },
});

export default wishlistSlice.reducer;
