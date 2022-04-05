import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { CartProvider } from "./context/cart-context";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <AuthProvider>
            <CartProvider>
               <App />
            </CartProvider>
         </AuthProvider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById("root")
);
