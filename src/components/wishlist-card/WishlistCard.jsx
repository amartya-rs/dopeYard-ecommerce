import { CrossIcon } from "../../assets/icons";

const WishlistCard = ({ card }) => {
   return (
      <div className="card vertical">
         <img className="card-img" src={card.imgUrl} />
         <button className="corner-button">
            <CrossIcon />
         </button>
         <div className="card-content">
            <h6 className="font-semibold">{card.title}</h6>
            <div className="price-wrapper">
               <h5>{`₹ ${card.discountPrice}`}</h5>
               <h6 className="strike-through">{card.price}</h6>
            </div>
            <button className="button primary">MOVE TO CART</button>
         </div>
      </div>
   );
};

export { WishlistCard };
