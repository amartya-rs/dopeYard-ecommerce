import { calculatePriceDetails } from "../../utils/calculatePriceDetails";

const PriceCard = ({ cart, heading, children }) => {
   return (
      <div className="price-card shadow p-4">
         <div className="card-field">
            <h6>{heading}</h6>
         </div>
         <hr className="my-1" />
         <div className="card-field">
            <span>Price</span>
            <span>{`₹  ${calculatePriceDetails(cart).totalPrice}`}</span>
         </div>
         <div className="card-field">
            <span>Discount</span>
            <span>{`- ₹  ${calculatePriceDetails(cart).totalDiscount}`}</span>
         </div>
         <div className="card-field">
            <span>Delivery Charges</span>
            <span>₹ 399</span>
         </div>
         <hr className="my-1" />
         <div className="card-field">
            <h6>TOTAL</h6>
            <span>{`₹  ${calculatePriceDetails(cart).grandTotal}`}</span>
         </div>
         <hr className="my-1" />
         <div className="my-2">
            You will save{" "}
            <b>{`₹ ${calculatePriceDetails(cart).totalDiscount}`}</b> on this
            order
         </div>
         {children}
      </div>
   );
};

export { PriceCard };
