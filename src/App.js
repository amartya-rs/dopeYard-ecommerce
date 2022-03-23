import {
   HomePage,
   LoginPage,
   ProductPage,
   SignUpPage,
   CartPage,
   WishlistPage,
} from "./pages/index";
import { Routes, Route } from "react-router-dom";

const App = () => {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
         </Routes>
      </div>
   );
};

export { App };
