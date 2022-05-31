import { CartIcon, HeartIcon, Star } from "../../assets/icons";
import { sold_out_img } from "../../assets/image";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { discount } from "../../utils/discount";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/server-requests";
import { isPresentInData } from "../../utils/isPresentInData";
import "./product-card.css";

const ProductCard = ({ card }) => {
   const navigate = useNavigate();
   const { isLoggedIn } = useSelector((state) => state.auth);
   const { cart } = useSelector((state) => state.cart);
   const dispatch = useDispatch();

   //adding a product to wishlist
   const addToWishlist = async (card) => {
      if (isLoggedIn) {
         try {
            const response = await axios.post(
               "/api/user/wishlist",
               {
                  product: card,
               },
               {
                  headers: {
                     authorization: localStorage.getItem("token"),
                  },
               }
            );
            dispatch({
               type: "SAVE_WISHLIST",
               payload: response.data.wishlist,
            });
         } catch (error) {
            console.log(error);
         }
      } else {
         navigate("/login");
      }
   };

   //removing a product from wishlist
   const removeFromWishlist = async (card) => {
      try {
         const response = await axios.delete(`/api/user/wishlist/${card._id}`, {
            headers: {
               authorization: localStorage.getItem("token"),
            },
         });
         dispatch({
            type: "SAVE_WISHLIST",
            payload: response.data.wishlist,
         });
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="card vertical">
         <img className="card-img" src={card.imgUrl} />
         {
            /*wishlistData.findIndex((item) => item._id === card._id) !== -1 ?*/ false ? (
               <button
                  onClick={() => removeFromWishlist(card)}
                  className="corner-button"
               >
                  <HeartIcon
                     strokeColor="rgb(145, 55, 135)"
                     fillColor="rgb(145, 55, 135)"
                  />
               </button>
            ) : (
               <button
                  onClick={() => addToWishlist(card)}
                  className="corner-button"
               >
                  <HeartIcon strokeColor="rgb(145, 55, 135)" />
               </button>
            )
         }
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
            {isPresentInData(cart, card) ? (
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
