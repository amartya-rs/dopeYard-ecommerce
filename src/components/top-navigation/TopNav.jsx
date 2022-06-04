import { CartIcon, HeartIcon, UserIcon, LogoutIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { setSearchInput } from "../../features/product/productSlice";
import { cartCount } from "../../utils/cartCount";
import { CrossIcon } from "../../assets/icons";
import "./top-nav.css";

const TopNav = () => {
   const { isLoggedIn } = useSelector((state) => state.auth);
   const { cart } = useSelector((state) => state.cart);
   const { wishlist } = useSelector((state) => state.wishlist);
   const { searchInput } = useSelector((state) => state.product);
   const dispatch = useDispatch();

   return (
      <>
         <nav className="main-nav">
            <Link to="/">
               {" "}
               <span className="h5 brand">dopeYard</span>{" "}
            </Link>
            <div class="search-bar">
               <input
                  class="text-input"
                  type="text"
                  placeholder="Search"
                  value={searchInput}
                  onChange={(e) => dispatch(setSearchInput(e.target.value))}
               />
               {searchInput && (
                  <CrossIcon onClick={() => dispatch(setSearchInput(""))} />
               )}
            </div>
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
