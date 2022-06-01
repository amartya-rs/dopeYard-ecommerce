import { discount } from "../../utils/discount";
import { useDispatch, useSelector } from "react-redux";
import {
   addToWishlist,
   removeFromCart,
   updateProductQuantity,
   removeFromWishlist,
} from "../../features/server-requests";
import { isPresentInData } from "../../utils/isPresentInData";

const CartCard = ({ card }) => {
   const dispatch = useDispatch();
   const { wishlist } = useSelector((state) => state.wishlist);

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
                  disabled={card.qty === 1 ? true : false}
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
            {isPresentInData(wishlist, card) ? (
               <button
                  onClick={() => {
                     dispatch(removeFromWishlist(card));
                  }}
                  className="button outline-secondary"
               >
                  REMOVE FROM WISHLIST
               </button>
            ) : (
               <button
                  onClick={() => {
                     dispatch(addToWishlist(card));
                  }}
                  className="button outline-secondary"
               >
                  MOVE TO WISHLIST
               </button>
            )}
         </div>
      </div>
   );
};

export { CartCard };
