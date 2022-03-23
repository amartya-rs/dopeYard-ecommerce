import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { CartProvider } from "./context/cart-context";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
// Call make Server
makeServer();

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <CartProvider>
            <App />
         </CartProvider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById("root")
);
