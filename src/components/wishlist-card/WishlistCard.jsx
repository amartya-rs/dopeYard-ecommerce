import { CrossIcon } from "../../assets/icons";
import { useCart } from "../../context/cart-context";

const WishlistCard = ({ card }) => {
   const { dispatch } = useCart();

   const addToCart = (card) => {
      dispatch({ type: "ADD_TO_CART", payload: card });
   };
   return (
      <div className="card vertical">
         <img className="card-img" src={card.imgUrl} />
         <button className="corner-button">
            <CrossIcon />
         </button>
         <div className="card-content">
            <h6 className="font-semibold">{card.title}</h6>
            <div className="price-wrapper">
               <h5>{`₹ ${card.price}`}</h5>
               <h6 className="strike-through">₹ 1999</h6>
            </div>
            <button onClick={() => addToCart(card)} className="button primary">
               MOVE TO CART
            </button>
         </div>
      </div>
   );
};

export { WishlistCard };
