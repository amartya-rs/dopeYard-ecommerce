import {
   HomePage,
   LoginPage,
   ProductPage,
   SignUpPage,
   CartPage,
   WishlistPage,
} from "./pages/index";

const App = () => {
   return (
      <div className="App">
         <HomePage />
         <ProductPage />
         <LoginPage />
         <SignUpPage />
         <CartPage />
         <WishlistPage />
      </div>
   );
};

export { App };
