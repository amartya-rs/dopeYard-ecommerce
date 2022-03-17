import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { CartProvider } from "./context/cart-context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
   <React.StrictMode>
      <CartProvider>
         <App />
      </CartProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
