import { TopNav } from "../../components";
import { Link } from "react-router-dom";
import "./signup-page.css";

const SignUpPage = () => {
   return (
      <div className="signup-page">
         <TopNav />
         <form className="auth-form">
            <div className="form-header">
               <h5>SIGNUP</h5>
               <p className="p-sm">Please fill in your information below.</p>
            </div>
            <div className="form-field">
               <div>
                  <label className="h6 font-medium" htmlFor="user-name">
                     Name*
                  </label>
                  <input
                     name="user-name"
                     className="text-input"
                     type="text"
                     placeholder="Kanye West"
                  />
               </div>
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
               SIGN UP
            </button>
            <div className="form-footer">
               <p className="p-sm">Already a user?</p>
               <Link to="/login">Login</Link>
            </div>
         </form>
      </div>
   );
};

export { SignUpPage };
