const CartCard = ({ card }) => {
   const discount = () => {
      const discountPercent =
         ((card.price - card.discountPrice) / card.price) * 100;
      return Math.trunc(discountPercent);
   };

   return (
      <div className="card horizontal">
         <img className="card-img" src={card.imgUrl} alt="product" />
         <div className="card-content">
            <h6 className="font-semibold">{card.title}</h6>
            <div className="price-wrapper">
               <h5>{`₹ ${card.discountPrice}`}</h5>
               <h6 className="strike-through">{`₹ ${card.price}`}</h6>
               <h6 className="discount-text">{`(${discount()}% off)`}</h6>
            </div>
            <div className="cart-quantity">
               <label htmlFor="quantity">Quantity: </label>
               <button className="font-medium">+</button>
               <input
                  value="1"
                  className="quantity-input h6 font-normal"
                  name="quantity"
               />
               <button className="font-medium">-</button>
            </div>
            <button className="button secondary">
               <span>REMOVE FROM CART</span>
            </button>
            <button className="button outline-secondary">WISHLIST</button>
         </div>
      </div>
   );
};

export { CartCard };
