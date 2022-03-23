import { CartIcon, HeartIcon, UserIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

const TopNav = () => {
   return (
      <>
         <nav className="main-nav">
            <Link to="/">
               <span className="h5 brand">dopeYard</span>
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
                     <UserIcon />
                  </Link>
               </li>
               <li>
                  <Link to="/wishlist">
                     <div className="badge-container">
                        <HeartIcon />
                     </div>
                  </Link>
               </li>
               <li>
                  <Link to="/cart">
                     <div className="badge-container">
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
