import "./login-page.css";
import { useState } from "react";
import { TopNav } from "../../components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/server-requests";

const LoginPage = () => {
   const dispatch = useDispatch();
   const [userDetails, setUserDetails] = useState({
      email: "",
      password: "",
   });

   const loginHandler = async (e) => {
      e.preventDefault();
      dispatch(
         login({
            email: userDetails.email,
            password: userDetails.password,
         })
      );
   };

   return (
      <div className="login-page">
         <TopNav />
         <form className="auth-form" onSubmit={loginHandler}>
            <div className="form-header">
               <h5>LOGIN</h5>
               <p className="p-sm">Please enter your email and password.</p>
            </div>
            <div className="form-field">
               <div>
                  <label className="h6 font-medium" htmlFor="email">
                     E-mail*
                  </label>
                  <input
                     onChange={(e) =>
                        setUserDetails({
                           ...userDetails,
                           email: e.target.value,
                        })
                     }
                     className="text-input"
                     type="email"
                     name="email"
                     placeholder="kanye@xyz.com"
                     value={userDetails.email}
                     required
                  />
               </div>
               <div>
                  <label className="h6 font-medium" htmlFor="password">
                     Password*
                  </label>
                  <input
                     onChange={(e) =>
                        setUserDetails({
                           ...userDetails,
                           password: e.target.value,
                        })
                     }
                     name="password"
                     className="text-input"
                     type="password"
                     placeholder="***************"
                     value={userDetails.password}
                     required
                  />
               </div>
            </div>
            <button className="button primary" type="submit">
               LOGIN
            </button>
            <div className="form-footer">
               <p className="p-sm">Not a user yet?</p>
               <Link to="/signup">Sign Up</Link>
            </div>
            <span
               className="helper font-medium"
               onClick={() =>
                  setUserDetails({
                     ...userDetails,
                     email: "guest@gmail.com",
                     password: "guest123",
                  })
               }
            >
               Use Guest Credentials
            </span>
         </form>
      </div>
   );
};

export { LoginPage };
