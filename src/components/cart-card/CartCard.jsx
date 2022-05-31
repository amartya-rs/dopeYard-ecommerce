import axios from "axios";
import { discount } from "../../utils/discount";
import { useDispatch } from "react-redux";
import {
   removeFromCart,
   updateProductQuantity,
} from "../../features/server-requests";

const CartCard = ({ card }) => {
   const dispatch = useDispatch();

   //moving a product to wishlist via API calls
   const moveToWishlist = async (card) => {
      if (
         true /*state.wishlistData.findIndex((item) => item._id === card._id) === -1*/
      ) {
         try {
            //adding an item to the wishlist
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

            //removing the same item from the cart
            const res = await axios.delete(`/api/user/cart/${card._id}`, {
               headers: {
                  authorization: localStorage.getItem("token"),
               },
            });
            dispatch({
               type: "SAVE_CART",
               payload: res.data.cart,
            });
         } catch (error) {
            console.log(error);
         }
      }
   };

   return (
      <div className="card horizontal">
         <img className="card-img" src={card.imgUrl} alt="product" />
         <div className="card-content">
            <h6>{card.title}</h6>
            <div className="price-wrapper">
               <h5 className="font-semibold">{`₹ ${card.discountPrice}`}</h5>
               <h6 className="strike-through font-semibold">{`₹ ${card.price}`}</h6>
               <h6 className="discount-text font-semibold">{`(${discount(
                  card
               )}% off)`}</h6>
            </div>
            <div className="cart-quantity">
               <label htmlFor="quantity">Quantity: </label>
               <button
                  value="INCREMENT"
                  onClick={(e) =>
                     dispatch(
                        updateProductQuantity({
                           productId: card._id,
                           value: e.target.value,
                        })
                     )
                  }
                  className="font-medium"
               >
                  +
               </button>
               <input
                  value={card.qty}
                  className="quantity-input h6 font-normal"
                  name="quantity"
                  readOnly
               />
               <button
                  value="DECREMENT"
                  onClick={(e) =>
                     dispatch(
                        updateProductQuantity({
                           productId: card._id,
                           value: e.target.value,
                        })
                     )
                  }
                  className="font-medium"
               >
                  -
               </button>
            </div>
            <button
               onClick={() => dispatch(removeFromCart(card))}
               className="button secondary"
            >
               <span>REMOVE FROM CART</span>
            </button>
            <button
               onClick={() => moveToWishlist(card)}
               className="button outline-secondary"
            >
               MOVE TO WISHLIST
            </button>
         </div>
      </div>
   );
};

export { CartCard };
