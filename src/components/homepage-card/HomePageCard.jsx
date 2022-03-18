const HomePageCard = ({ card }) => {
   return (
      <>
         <div className="card vertical shadow">
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
