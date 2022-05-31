import "./category-card.css";

const CategoryCard = ({ card, toProductPage }) => {
   return (
      <div
         className="card vertical shadow category"
         onClick={() => toProductPage(card.categoryName)}
      >
         <img className="card-img" src={card.imgUrl} />
         <div className="overlay h4">{card.categoryName}</div>
      </div>
   );
};

export { CategoryCard };
