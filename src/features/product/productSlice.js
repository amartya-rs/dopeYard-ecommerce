import { createSlice } from "@reduxjs/toolkit";
import { loadProductCategories, loadProductData } from "../server-requests";
import { toastError } from "../../utils/useToast";

const initialState = {
   products: "",
   categories: "",
   status: "idle",
   sortByPrice: null,
   filterByRating: null,
   filterByPrice: 3999,
   filterByCategory: {
      tshirt: false,
      hoodie: false,
      cap: false,
      longsleeve: false,
   },
   inStock: false,
   searchInput: "",
};

export const productSlice = createSlice({
   name: "product",
   initialState,
   reducers: {
      filterByCategory: (state, action) => {
         state.filterByCategory[action.payload] =
            !state.filterByCategory[action.payload];
      },
      filterByRating: (state, action) => {
         state.filterByRating = action.payload;
      },
      filterByPrice: (state, action) => {
         state.filterByPrice = action.payload;
      },
      filterByStock: (state) => {
         state.inStock = !state.inStock;
      },
      sortByPrice: (state, action) => {
         state.sortByPrice = action.payload;
      },
      resetFilters: (state) => {
         state.sortByPrice = null;
         state.filterByRating = null;
         state.filterByPrice = 3999;
         state.filterByCategory.tshirt = false;
         state.filterByCategory.hoodie = false;
         state.filterByCategory.longsleeve = false;
         state.filterByCategory.cap = false;
         state.inStock = false;
      },
      setSearchInput: (state, action) => {
         state.searchInput = action.payload;
      },
   },
   extraReducers: {
      [loadProductData.fulfilled]: (state, action) => {
         state.status = "fulfilled";
         state.products = action.payload.products;
      },
      [loadProductData.rejected]: (state) => {
         state.status = "rejected";
         toastError("Some error occured. Try refreshing.");
      },
      [loadProductCategories.fulfilled]: (state, action) => {
         state.status = "fulfilled";
         state.categories = action.payload.categories;
      },
      [loadProductCategories.rejected]: (state) => {
         state.status = "rejected";
         toastError("Some error occured. Try refreshing.");
      },
   },
});

export const {
   filterByCategory,
   filterByStock,
   filterByPrice,
   filterByRating,
   sortByPrice,
   resetFilters,
   setSearchInput,
} = productSlice.actions;

export default productSlice.reducer;
