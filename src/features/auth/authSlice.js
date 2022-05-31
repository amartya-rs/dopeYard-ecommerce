import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "../server-requests";
import { toastSuccess, toastError } from "../../utils/useToast";

const initialState = {
   isLoggedIn: false,
   user: "",
   status: "idle",
};

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      toggleLogin: (state, action) => {
         state.isLoggedIn = action.payload;
      },
      setUserDetails: (state, action) => {
         state.user = action.payload;
      },
      logout: (state) => {
         state.isLoggedIn = false;
         state.user = "";
         localStorage.removeItem("token");
         localStorage.removeItem("user");
         toastSuccess("Logged out successfully");
      },
   },
   extraReducers: {
      [login.fulfilled]: (state, action) => {
         const { name, email } = action?.payload?.foundUser;
         state.status = "fulfilled";
         state.isLoggedIn = true;
         state.user = { name, email };
         localStorage.setItem("token", action?.payload?.encodedToken);
         localStorage.setItem("user", JSON.stringify({ name, email }));
         toastSuccess("Logged in successfully");
      },
      [login.rejected]: (state, action) => {
         state.status = "rejected";
         toastError(action.payload?.errors[0]);
      },
      [signup.fulfilled]: (state, action) => {
         const { name, email } = action?.payload?.createdUser;
         state.status = "fulfilled";
         state.isLoggedIn = true;
         state.user = { name, email };
         localStorage.setItem("token", action?.payload?.encodedToken);
         localStorage.setItem("user", JSON.stringify({ name, email }));
         toastSuccess("Signed up successfully");
      },
      [signup.rejected]: (state, action) => {
         state.status = "rejected";
         toastError(action.payload?.errors[0]);
      },
   },
});

export const { toggleLogin, setError, setUserDetails, logout } =
   authSlice.actions;

export default authSlice.reducer;
