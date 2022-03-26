import { useCart } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";

const HomePageCard = ({ card }) => {
   const { dispatch } = useCart();
   const navigate = useNavigate();

   const toProductPage = () => {
      navigate("/products");
      window.scroll(0, 0);
      dispatch({
         type: "FILTER_BY_CATEGORY",
         payload: card.categoryName.toLowerCase().replaceAll(" ", ""),
      });
   };

   return (
      <>
         <div className="card vertical shadow" onClick={toProductPage}>
            <img className="card-img" src={card.imgUrl} />
            <div className="card-content">
               <h6 className="font-semibold">{card.title}</h6>
               <div className="price-wrapper">
                  <h5>{`₹ ${card.discountPrice}`}</h5>
               </div>
            </div>
         </div>
      </>
   );
};

export { HomePageCard };
