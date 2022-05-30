import { CartIcon, HeartIcon, UserIcon, LogoutIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import "./top-nav.css";

const TopNav = () => {
   const { state } = useCart();
   const { isLoggedIn } = useSelector((state) => state.auth);
   const dispatch = useDispatch();

   const cartCount = () => {
      return state.cartData.reduce((sum, i) => sum + i.qty, 0);
   };

   return (
      <>
         <nav className="main-nav">
            <Link to="/">
               {" "}
               <span className="h5 brand">dopeYard</span>{" "}
            </Link>
            <ul className="link-wrapper">
               <li>
                  <Link to="/">
                     <span className="link">Home</span>
                  </Link>
               </li>
               <li>
                  <Link to="/products">
                     <span className="link">Products</span>
                  </Link>
               </li>
               <li>
                  <Link to="/login">
                     {isLoggedIn ? (
                        <LogoutIcon onClick={() => dispatch(logout())} />
                     ) : (
                        <UserIcon />
                     )}
                  </Link>
               </li>
               <li>
                  <Link to="/wishlist">
                     <div className="badge-container">
                        {isLoggedIn ? (
                           <div className="number-badge">
                              {state.wishlistData.length}
                           </div>
                        ) : (
                           ""
                        )}
                        <HeartIcon />
                     </div>
                  </Link>
               </li>
               <li>
                  <Link to="/cart">
                     <div className="badge-container">
                        {isLoggedIn ? (
                           <div className="number-badge">{cartCount()}</div>
                        ) : (
                           ""
                        )}
                        <CartIcon />
                     </div>
                  </Link>
               </li>
            </ul>
         </nav>
      </>
   );
};

export { TopNav };
