import { HomePage, LoginPage, ProductPage, SignUpPage } from "./pages/index";

const App = () => {
   return (
      <div className="App">
         <HomePage />
         <ProductPage />
         <LoginPage />
         <SignUpPage />
      </div>
   );
};

export { App };
