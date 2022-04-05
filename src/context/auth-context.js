import { createContext, useContext, useReducer, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   useEffect(() => {
      localStorage.getItem("token") !== null
         ? authDispatch({ type: "TOGGLE_LOGIN" })
         : "";
   }, []);

   const authReducer = (authState, { type, payload }) => {
      switch (type) {
         case "TOGGLE_LOGIN":
            return {
               ...authState,
               isLoggedIn: !authState.isLoggedIn,
            };
         case "SET_EMAIL":
            return {
               ...authState,
               email: payload,
            };
         case "SET_PW":
            return {
               ...authState,
               password: payload,
            };
         case "SET_NAME":
            return {
               ...authState,
               name: payload,
            };
         case "SET_ERROR":
            return {
               ...authState,
               error: payload,
            };
         case "SET_GUEST_CREDENTIALS":
            return {
               ...authState,
               email: payload[0],
               password: payload[1],
               error: "",
            };
         case "SET_USER_CREDENTIALS":
            return {
               ...authState,
               name: payload.name,
               email: payload.email,
               password: payload.password ?? "",
               isLoggedIn: !authState.isLoggedIn,
            };
         case "CLEAR_FIELDS":
            return {
               ...authState,
               name: "",
               email: "",
               password: "",
               error: "",
            };
         default:
            authState;
      }
   };

   const initialState = {
      isLoggedIn: false,
      name: "",
      email: "",
      password: "",
      error: "",
   };

   const [authState, authDispatch] = useReducer(authReducer, initialState);

   return (
      <AuthContext.Provider value={{ authState, authDispatch }}>
         {children}
      </AuthContext.Provider>
   );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
