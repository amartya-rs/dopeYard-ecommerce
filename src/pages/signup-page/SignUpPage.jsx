import { TopNav } from "../../components";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup-page.css";

const SignUpPage = () => {
   const navigate = useNavigate();
   const { authState, authDispatch } = useAuth();

   //signup handler
   const signupHandler = async () => {
      if (
         authState.email !== "" &&
         authState.password !== "" &&
         authState.name !== ""
      ) {
         try {
            const response = await axios.post(`/api/auth/signup`, {
               name: authState.name,
               email: authState.email,
               password: authState.password,
            });
            // saving the encodedToken in the localStorage
            localStorage.setItem("token", response.data.encodedToken);
            authDispatch({
               type: "SET_USER_CREDENTIALS",
               payload: response.data.createdUser,
            });
            navigate("/products");
         } catch (error) {
            console.log(error);
         }
      } else {
         authDispatch({
            type: "SET_ERROR",
            payload: "Enter your details",
         });
      }
   };

   //validating user credentials
   const checkCredentials = ({ name, value }) => {
      const regex = /^\w+\@\w+\.\w{2,}$/;
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
         if (name === "name") {
            if (value.length > 4) {
               return value;
            } else {
               authDispatch({
                  type: "SET_ERROR",
                  payload: "Name should be more then 5 character",
               });
               return value;
            }
         }
         if (name === "email") {
            if (regex.test(value)) {
               return value;
            } else {
               authDispatch({
                  type: "SET_ERROR",
                  payload: "Enter a valid email",
               });
               return value;
            }
         }
         if (name === "password") {
            if (value.length > 6) {
               return value;
            } else {
               authDispatch({
                  type: "SET_ERROR",
                  payload: "Password should be more than 6 characters",
               });
               return value;
            }
         }
      }
   };

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
                  <label className="h6 font-medium" htmlFor="name">
                     Name*
                  </label>
                  <input
                     onChange={(e) =>
                        authDispatch({
                           type: "SET_NAME",
                           payload: checkCredentials(e.target),
                        })
                     }
                     name="name"
                     className="text-input"
                     type="text"
                     placeholder="Kanye West"
                     value={authState.name}
                  />
               </div>
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
               onClick={signupHandler}
            >
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
