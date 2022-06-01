const HomePageCard = ({ card, toProductPage }) => {
   return (
      <div
         className="card vertical shadow"
         onClick={() => toProductPage(card.categoryName)}
      >
         <img className="card-img" src={card.imgUrl} />
         <div className="card-content">
            <h6 className="font-semibold">{card.title}</h6>
            <div className="price-wrapper">
               <h5>{`₹ ${card.discountPrice}`}</h5>
            </div>
         </div>
      </div>
   );
};

export { HomePageCard };
