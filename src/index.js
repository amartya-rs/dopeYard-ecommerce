import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { CartProvider } from "./context/cart-context";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

// Call make Server
makeServer();

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <CartProvider>
               <App />
            </CartProvider>
         </BrowserRouter>
      </Provider>
   </React.StrictMode>,
   document.getElementById("root")
);
