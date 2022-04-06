import { CartIcon, HeartIcon, Star } from "../../assets/icons";
import { sold_out_img } from "../../assets/image";
import { useCart } from "../../context/cart-context";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { discount } from "../../utils/discount";
import { useAuth } from "../../context/auth-context";
import "./product-card.css";

const ProductCard = ({ card }) => {
   const { state, dispatch } = useCart();
   const { authState } = useAuth();
   const navigate = useNavigate();

   //adding a product to cart
   const addToCart = async (card) => {
      if (authState.isLoggedIn) {
         try {
            const response = await axios.post(
               "/api/user/cart",
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
               type: "SAVE_CART",
               payload: response.data.cart,
            });
         } catch (error) {
            console.log(error);
         }
      } else {
         navigate("/login");
      }
   };

   //adding a product to wishlist
   const addToWishlist = async (card) => {
      if (authState.isLoggedIn) {
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
         {state.wishlistData.findIndex((item) => item._id === card._id) !==
         -1 ? (
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
            {state.cartData.findIndex((item) => item._id === card._id) !==
            -1 ? (
               <Link to="/cart">
                  <button className="button secondary">
                     <span>GO TO CART</span>
                  </button>
               </Link>
            ) : (
               <button
                  onClick={() => addToCart(card)}
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
