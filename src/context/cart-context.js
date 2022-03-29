import { useEffect, createContext, useContext, useReducer } from "react";
import axios from "axios";
import { cartReducer, initialState } from "../reducer/cart-reducer";
const CartContext = createContext();

const CartProvider = ({ children }) => {
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

   const [state, dispatch] = useReducer(cartReducer, initialState);

   return (
      <CartContext.Provider value={{ state, dispatch }}>
         {children}
      </CartContext.Provider>
   );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
