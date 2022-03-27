//reducer function
const cartReducer = (state, { type, payload }) => {
   switch (type) {
      case "SAVE_ALL_PRODUCTS":
         return {
            ...state,
            productData: payload,
         };
      case "SAVE_CART":
         return {
            ...state,
            cartData: payload,
         };
      case "SAVE_WISHLIST":
         return {
            ...state,
            wishlistData: payload,
         };
      case "SAVE_CATEGORIES":
         return {
            ...state,
            allCategories: payload,
         };
      case "SORT_BY_PRICE":
         return {
            ...state,
            sortBy: payload,
         };
      case "FILTER_BY_RATING":
         return {
            ...state,
            filterByRating: payload,
         };
      case "FILTER_BY_CATEGORY":
         return {
            ...state,
            filterByCategory: {
               ...state.filterByCategory,
               [payload]: !state.filterByCategory[payload],
            },
         };
      case "TOGGLE_INVENTORY":
         return {
            ...state,
            isStock: !state.isStock,
         };
      case "CLEAR_FILTERS":
         return {
            ...state,
            sortBy: null,
            filterByRating: null,
            filterByCategory: {
               tshirt: false,
               hoodie: false,
               cap: false,
               longsleeve: false,
            },
            isStock: false,
         };
      default:
         return state;
   }
};

//initial states
const initialState = {
   productData: [],
   wishlistData: [],
   cartData: [],
   allCategories: [],
   sortBy: null,
   filterByRating: null,
   filterByCategory: {
      tshirt: false,
      hoodie: false,
      cap: false,
      longsleeve: false,
   },
   isStock: false,
};

export { cartReducer, initialState };
