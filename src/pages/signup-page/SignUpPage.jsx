import { TopNav } from "../../components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../features/server-requests";
import { useState } from "react";
import "./signup-page.css";

const SignUpPage = () => {
   const dispatch = useDispatch();
   const [error, setError] = useState("");
   const [userDetails, setUserDetails] = useState({
      name: "",
      email: "",
      password: "",
   });

   const signupHandler = async (e) => {
      e.preventDefault();
      dispatch(
         signup({
            name: userDetails.name,
            email: userDetails.email,
            password: userDetails.password,
         })
      );
   };

   //validating user credentials
   const checkCredentials = ({ name, value }) => {
      const regex = /^\w+\@\w+\.\w{2,}$/;
      if (value === "") {
         setError(`Enter your ${name}`);
         return "";
      } else {
         setError("");
         if (name === "name") {
            if (value.length > 4) {
               return value;
            } else {
               setError("Name should be more then 5 character");
               return value;
            }
         }
         if (name === "email") {
            if (regex.test(value)) {
               return value;
            } else {
               setError("Enter a valid email");
               return value;
            }
         }
         if (name === "password") {
            if (value.length > 6) {
               return value;
            } else {
               setError("Password should be more than 6 characters");
               return value;
            }
         }
      }
   };

   return (
      <div className="signup-page">
         <TopNav />
         <form className="auth-form" onSubmit={signupHandler}>
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
                        setUserDetails({
                           ...userDetails,
                           name: checkCredentials(e.target),
                        })
                     }
                     name="name"
                     className="text-input"
                     type="text"
                     placeholder="Kanye West"
                     value={userDetails.name}
                     required
                  />
               </div>
               <div>
                  <label className="h6 font-medium" htmlFor="email">
                     E-mail*
                  </label>
                  <input
                     onChange={(e) =>
                        setUserDetails({
                           ...userDetails,
                           email: checkCredentials(e.target),
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
                           password: checkCredentials(e.target),
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
            <span className="auth-error">{error}</span>
            <button
               className="button primary"
               type="submit"
               disabled={error ? true : false}
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
