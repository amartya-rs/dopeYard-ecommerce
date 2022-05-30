import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleLogin, setUserDetails } from "../features/auth/authSlice";

export const useCheckLoginStatus = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      if (localStorage.getItem("token")) {
         dispatch(toggleLogin(true));
         dispatch(setUserDetails(JSON.parse(localStorage.getItem("user"))));
      }
   }, []);
};
