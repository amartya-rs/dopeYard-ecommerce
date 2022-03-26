import { CartIcon, HeartIcon, Star } from "../../assets/icons";
import { sold_out_img } from "../../assets/image";
import "./product-card.css";

const ProductCard = ({ card }) => {
   //calculating the discount percent of products
   const discount = () => {
      const discountPercent =
         ((card.price - card.discountPrice) / card.price) * 100;
      return Math.trunc(discountPercent);
   };

   return (
      <div className="card vertical">
         <img className="card-img" src={card.imgUrl} />
         <button className="corner-button">
            <HeartIcon strokeColor="rgb(145, 55, 135)" />
         </button>
         <div className="card-content">
            <h6>{card.title}</h6>
            <div className="price-wrapper">
               <h5 className="font-semibold">{`₹ ${card.discountPrice}`}</h5>
               <h6 className="strike-through font-semibold">{`₹ ${card.price}`}</h6>
               <span className="discount-text font-semibold">{`(${discount()}% off)`}</span>
            </div>
            <span className="rating-badge font-semibold">
               <span>{card.rating}</span>
               <Star />
            </span>
            <button className="button button-icons primary">
               <CartIcon />
               <span>ADD TO CART</span>
            </button>
         </div>
         <div className={card.inStock ? "hide-overlay" : "overlay"}>
            <img src={sold_out_img} alt="out of stock" />
         </div>
      </div>
   );
};

export { ProductCard };
