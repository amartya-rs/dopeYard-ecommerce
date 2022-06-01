import { CartIcon, HeartIcon, UserIcon, LogoutIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { cartCount } from "../../utils/cartCount";
import "./top-nav.css";

const TopNav = () => {
   const { isLoggedIn } = useSelector((state) => state.auth);
   const { cart } = useSelector((state) => state.cart);
   const { wishlist } = useSelector((state) => state.wishlist);
   const dispatch = useDispatch();

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
                              {wishlist?.length}
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
                           <div className="number-badge">{cartCount(cart)}</div>
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
