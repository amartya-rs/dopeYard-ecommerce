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
               type: "UPDATE_DATA",
               payload: response.data.products,
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
         case "UPDATE_DATA":
            return {
               ...state,
               productData: action.payload,
            };

         default:
            return state;
      }
   };

   const [state, dispatch] = useReducer(cartReducer, {
      productData: [],
   });

   return (
      <CartContext.Provider value={{ state, dispatch }}>
         {children}
      </CartContext.Provider>
   );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
