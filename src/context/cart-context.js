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
   const cartReducer = (state, action) => {
      switch (action.type) {
         case "SAVE_ALL_PRODUCTS":
            return {
               ...state,
               productData: action.payload,
            };
         case "SAVE_CART":
            return {
               ...state,
               cartData: action.payload,
            };
         case "SAVE_WISHLIST":
            return {
               ...state,
               wishlistData: action.payload,
            };

         default:
            return state;
      }
   };

   const [state, dispatch] = useReducer(cartReducer, {
      productData: [],
      wishlistData: [],
      cartData: [],
   });

   return (
      <CartContext.Provider value={{ state, dispatch }}>
         {children}
      </CartContext.Provider>
   );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
