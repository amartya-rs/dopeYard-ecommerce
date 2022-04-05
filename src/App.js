import {
   HomePage,
   LoginPage,
   ProductPage,
   SignUpPage,
   CartPage,
   WishlistPage,
   Page404,
} from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute, RestrictedRoute } from "./components/index";

const App = () => {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            //private routes
            <Route element={<PrivateRoute />}>
               <Route path="/cart" element={<CartPage />} />
               <Route path="/wishlist" element={<WishlistPage />} />
            </Route>
            //restricted routes
            <Route element={<RestrictedRoute />}>
               <Route path="/login" element={<LoginPage />} />
               <Route path="/signup" element={<SignUpPage />} />
            </Route>
            <Route path="*" element={<Page404 />} />
         </Routes>
      </div>
   );
};

export { App };
