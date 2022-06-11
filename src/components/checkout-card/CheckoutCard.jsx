import "./checkout-card.css";

const CheckoutCard = ({ card }) => {
   return (
      <div className="card horizontal checkout my-1">
         <img className="card-img" src={card.imgUrl} alt="product" />
         <div className="card-content">
            <h6>{card.title}</h6>
            <div className="price-wrapper">
               Total price: {`₹ ${card.discountPrice * card.qty}`}
            </div>
            <div className="cart-quantity">Quantity: {card.qty}</div>
         </div>
      </div>
   );
};

export { CheckoutCard };
