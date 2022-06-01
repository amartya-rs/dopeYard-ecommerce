import { CartIcon, HeartIcon, Star } from "../../assets/icons";
import { sold_out_img } from "../../assets/image";
import { Link, useNavigate } from "react-router-dom";
import { discount } from "../../utils/discount";
import { useDispatch, useSelector } from "react-redux";
import {
   addToCart,
   addToWishlist,
   removeFromWishlist,
} from "../../features/server-requests";
import { isPresentInData } from "../../utils/isPresentInData";
import "./product-card.css";

const ProductCard = ({ card }) => {
   const navigate = useNavigate();
   const { isLoggedIn } = useSelector((state) => state.auth);
   const { cart } = useSelector((state) => state.cart);
   const { wishlist } = useSelector((state) => state.wishlist);
   const dispatch = useDispatch();

   return (
      <div className="card vertical">
         <img className="card-img" src={card.imgUrl} />
         {isLoggedIn && isPresentInData(wishlist, card) ? (
            <button
               onClick={() => dispatch(removeFromWishlist(card))}
               className="corner-button"
            >
               <HeartIcon
                  strokeColor="rgb(145, 55, 135)"
                  fillColor="rgb(145, 55, 135)"
               />
            </button>
         ) : (
            <button
               onClick={() =>
                  isLoggedIn
                     ? dispatch(addToWishlist(card))
                     : navigate("/login")
               }
               className="corner-button"
            >
               <HeartIcon strokeColor="rgb(145, 55, 135)" />
            </button>
         )}
         <div className="card-content">
            <h6>{card.title}</h6>
            <div className="price-wrapper">
               <h5 className="font-semibold">{`₹ ${card.discountPrice}`}</h5>
               <h6 className="strike-through font-semibold">{`₹ ${card.price}`}</h6>
               <span className="discount-text font-semibold">{`(${discount(
                  card
               )}% off)`}</span>
            </div>
            <span className="rating-badge font-semibold">
               <span>{card.rating}</span>
               <Star />
            </span>
            {isLoggedIn && isPresentInData(cart, card) ? (
               <Link to="/cart">
                  <button className="button secondary">
                     <span>GO TO CART</span>
                  </button>
               </Link>
            ) : (
               <button
                  onClick={() =>
                     isLoggedIn ? dispatch(addToCart(card)) : navigate("/login")
                  }
                  className="button button-icons primary"
               >
                  <CartIcon />
                  <span>ADD TO CART</span>
               </button>
            )}
         </div>
         <div className={card.inStock ? "hide-overlay" : "overlay"}>
            <img src={sold_out_img} alt="out of stock" />
         </div>
      </div>
   );
};

export { ProductCard };
