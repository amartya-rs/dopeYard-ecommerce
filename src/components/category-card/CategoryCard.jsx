import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import "./category-card.css";

const CategoryCard = ({ card }) => {
   const { dispatch } = useCart();
   const navigation = useNavigate();

   const toProductPage = () => {
      navigation("/products");
      window.scroll(0, 0);
      dispatch({
         type: "FILTER_BY_CATEGORY",
         payload: card.categoryName.toLowerCase().replaceAll(" ", ""),
      });
      console.log(card.categoryName);
   };

   return (
      <div className="card vertical shadow category" onClick={toProductPage}>
         <img className="card-img" src={card.imgUrl} />
         <div className="overlay h4">{card.categoryName}</div>
      </div>
   );
};

export { CategoryCard };
