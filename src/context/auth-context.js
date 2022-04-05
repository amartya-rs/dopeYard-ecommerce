import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer, initialState } from "../reducer/auth-reducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   useEffect(() => {
      localStorage.getItem("token") !== null
         ? authDispatch({ type: "TOGGLE_LOGIN" })
         : "";
   }, []);

   const [authState, authDispatch] = useReducer(authReducer, initialState);

   return (
      <AuthContext.Provider value={{ authState, authDispatch }}>
         {children}
      </AuthContext.Provider>
   );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
