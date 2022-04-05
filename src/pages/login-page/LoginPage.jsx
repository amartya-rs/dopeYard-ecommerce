import { TopNav } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth-context";
import "./login-page.css";

const LoginPage = () => {
   const navigate = useNavigate();
   const { authState, authDispatch } = useAuth();

   //login handler
   const loginHandler = async () => {
      if (authState.email !== "" && authState.password !== "") {
         try {
            const response = await axios.post(`/api/auth/login`, {
               email: authState.email,
               password: authState.password,
            });
            // saving the encodedToken in the localStorage
            localStorage.setItem("token", response.data.encodedToken);
            authDispatch({
               type: "SET_USER_CREDENTIALS",
               payload: response.data.foundUser,
            });
            navigate("/products");
         } catch {
            authDispatch({
               type: "SET_ERROR",
               payload: "Credentials not found",
            });
         }
      } else {
         authDispatch({
            type: "SET_ERROR",
            payload: "Enter your details",
         });
      }
   };

   //setting the guest credentials
   const guestLogin = () => {
      authDispatch({
         type: "SET_GUEST_CREDENTIALS",
         payload: ["guest@gmail.com", "guest123"],
      });
   };

   //checking user credentials
   const checkCredentials = ({ name, value }) => {
      if (value === "") {
         authDispatch({
            type: "SET_ERROR",
            payload: `Enter your ${name}`,
         });
         return "";
      } else {
         authDispatch({
            type: "SET_ERROR",
            payload: "",
         });
         return value;
      }
   };

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
                  <label className="h6 font-medium" htmlFor="email">
                     E-mail*
                  </label>
                  <input
                     onChange={(e) =>
                        authDispatch({
                           type: "SET_EMAIL",
                           payload: checkCredentials(e.target),
                        })
                     }
                     className="text-input"
                     type="email"
                     name="email"
                     placeholder="kanye@xyz.com"
                     value={authState.email}
                  />
               </div>
               <div>
                  <label className="h6 font-medium" htmlFor="password">
                     Password*
                  </label>
                  <input
                     onChange={(e) =>
                        authDispatch({
                           type: "SET_PW",
                           payload: checkCredentials(e.target),
                        })
                     }
                     name="password"
                     className="text-input"
                     type="password"
                     placeholder="***************"
                     value={authState.password}
                  />
               </div>
            </div>
            <span className="auth-error">{authState.error}</span>
            <button
               className="button primary"
               type="button"
               onClick={loginHandler}
            >
               LOGIN
            </button>
            <div className="form-footer">
               <p className="p-sm">Not a user yet?</p>
               <Link to="/signup">Sign Up</Link>
            </div>
            <span className="helper font-medium" onClick={guestLogin}>
               Use Guest Credentials
            </span>
         </form>
      </div>
   );
};

export { LoginPage };
