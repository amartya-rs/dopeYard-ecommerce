import { CrossIcon, Star } from "../../assets/icons";
import { useCart } from "../../context/cart-context";
import axios from "axios";
import { discount } from "../../utils/discount";

const WishlistCard = ({ card }) => {
   const { state, dispatch } = useCart();

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

   //moving a product to cart
   const moveToCart = async (card) => {
      if (state.cartData.findIndex((item) => item._id === card._id) === -1) {
         try {
            //adding an item to the cart
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

            //removing the same item from the wishlist
            const res = await axios.delete(`/api/user/wishlist/${card._id}`, {
               headers: {
                  authorization: localStorage.getItem("token"),
               },
            });
            dispatch({
               type: "SAVE_WISHLIST",
               payload: res.data.wishlist,
            });
         } catch (error) {
            console.log(error);
         }
      }
   };

   return (
      <div className="card vertical">
         <img className="card-img" src={card.imgUrl} />
         <button
            onClick={() => removeFromWishlist(card)}
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
            <button onClick={() => moveToCart(card)} className="button primary">
               MOVE TO CART
            </button>
         </div>
      </div>
   );
};

export { WishlistCard };
