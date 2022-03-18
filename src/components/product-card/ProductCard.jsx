import { CartIcon, HeartIcon } from "../../assets/icons";
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
            <h6 className="font-semibold">{card.title}</h6>
            <div className="price-wrapper">
               <h5>{`₹ ${card.discountPrice}`}</h5>
               <h6 className="strike-through">{`₹ ${card.price}`}</h6>
               <h6 className="discount-text">{`${discount()}% off`}</h6>
            </div>
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
