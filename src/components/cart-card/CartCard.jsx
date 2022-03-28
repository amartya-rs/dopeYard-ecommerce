import { useCart } from "../../context/cart-context";
import axios from "axios";
import { discount } from "../../utils/discount";

const CartCard = ({ card }) => {
   const { state, dispatch } = useCart();

   //remove a product from cart via API call
   const removeFromCart = async (card) => {
      try {
         const response = await axios.delete(`/api/user/cart/${card._id}`, {
            headers: {
               authorization: localStorage.getItem("token"),
            },
         });
         dispatch({
            type: "SAVE_CART",
            payload: response.data.cart,
         });
      } catch (error) {
         console.log(error);
      }
   };

   //update a products quantity via API call
   const updateItemQuantity = async (val) => {
      try {
         const response = await axios.post(
            `/api/user/cart/${card._id}`,
            {
               action: {
                  type: val === "INCREMENT" ? "increment" : "decrement",
               },
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
   };

   //moving a product to wishlist via API calls
   const moveToWishlist = async (card) => {
      if (
         state.wishlistData.findIndex((item) => item._id === card._id) === -1
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
                  onClick={(e) => updateItemQuantity(e.target.value)}
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
               <button onClick={updateItemQuantity} className="font-medium">
                  -
               </button>
            </div>
            <button
               onClick={() => removeFromCart(card)}
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
