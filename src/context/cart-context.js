import { useEffect, createContext, useContext, useReducer } from "react";
import axios from "axios";

const CartContext = createContext();

const CartProvider = ({ children }) => {
   //fetching all product data from server
   useEffect(() => {
      (async () => {
         try {
            const response = await axios.get("/api/products");
            dispatch({
               type: "SAVE_ALL_PRODUCTS",
               payload: response.data.products,
            });
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);

   //fetching cart data from server
   useEffect(() => {
      (async () => {
         try {
            const response = await axios.get(`/api/user/cart`, {
               headers: {
                  authorization: localStorage.getItem("token"),
               },
            });
            dispatch({
               type: "SAVE_CART",
               payload: response.data.cart,
            });
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);

   //fetching wishlist data from the server
   useEffect(() => {
      (async () => {
         try {
            const response = await axios.get(`/api/user/wishlist`, {
               headers: {
                  authorization: localStorage.getItem("token"),
               },
            });
            dispatch({
               type: "SAVE_WISHLIST",
               payload: response.data.wishlist,
            });
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);

   //fetching all categories from server
   useEffect(() => {
      (async () => {
         try {
            const response = await axios.get(`/api/categories`);
            dispatch({
               type: "SAVE_CATEGORIES",
               payload: response.data.categories,
            });
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);

   //authorization for accessing private routes
   useEffect(() => {
      (async () => {
         try {
            const response = await axios.post(`/api/auth/login`, {
               email: "adarshbalika@gmail.com",
               password: "adarshBalika123",
            });
            // saving the encodedToken in the localStorage
            localStorage.setItem("token", response.data.encodedToken);
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);

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

   const [state, dispatch] = useReducer(cartReducer, initialState);

   return (
      <CartContext.Provider value={{ state, dispatch }}>
         {children}
      </CartContext.Provider>
   );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
