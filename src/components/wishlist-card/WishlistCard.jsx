import { CrossIcon, Star } from "../../assets/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromWishlist } from "../../features/server-requests";
import { discount } from "../../utils/discount";
import { isPresentInData } from "../../utils/isPresentInData";

const WishlistCard = ({ card }) => {
   const dispatch = useDispatch();
   const { cart } = useSelector((state) => state.cart);

   return (
      <div className="card vertical">
         <img className="card-img" src={card.imgUrl} />
         <button
            onClick={() => dispatch(removeFromWishlist(card))}
            className="corner-button"
         >
            <CrossIcon />
         </button>
         <div className="card-content">
            <h6>{card.title}</h6>
            <div className="price-wrapper">
               <h5 className="font-semibold">{`₹ ${card.discountPrice}`}</h5>
               <h6 className="strike-through font-semibold">{card.price}</h6>
               <span className="discount-text font-semibold">{`(${discount(
                  card
               )}% off)`}</span>
            </div>
            <span className="rating-badge font-semibold">
               <span>{card.rating}</span>
               <Star />
            </span>
            {isPresentInData(cart, card) ? (
               <Link to="/cart">
                  <button className="button secondary">
                     <span>GO TO CART</span>
                  </button>
               </Link>
            ) : (
               <button
                  onClick={() => {
                     dispatch(addToCart(card));
                  }}
                  className="button primary"
               >
                  MOVE TO CART
               </button>
            )}
         </div>
      </div>
   );
};

export { WishlistCard };
