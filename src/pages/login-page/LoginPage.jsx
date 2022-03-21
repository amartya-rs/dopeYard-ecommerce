import { TopNav } from "../../components";
import "./login-page.css";

const LoginPage = () => {
   return (
      <div className="login-page">
         <TopNav />
         <form className="auth-form">
            <div className="form-header">
               <h5>LOGIN</h5>
               <p className="p-sm">Please enter your email and password.</p>
            </div>
            <div className="form-field">
               <div>
                  <label className="h6 font-medium" htmlFor="user-email">
                     E-mail*
                  </label>
                  <input
                     className="text-input"
                     type="email"
                     name="user-email"
                     placeholder="kanye@xyz.com"
                  />
               </div>
               <div>
                  <label className="h6 font-medium" htmlFor="user-password">
                     Password*
                  </label>
                  <input
                     name="user-password"
                     className="text-input"
                     type="password"
                     placeholder="***************"
                  />
               </div>
            </div>
            <button className="button primary" type="submit">
               LOGIN
            </button>
            <div className="form-footer">
               <p className="p-sm">Not a user yet?</p>
               <a href="./signup.html">Sign Up</a>
            </div>
         </form>
      </div>
   );
};

export { LoginPage };
