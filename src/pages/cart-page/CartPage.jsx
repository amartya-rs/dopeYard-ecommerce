import { CartCard, Footer, TopNav } from "../../components";
import { useSelector } from "react-redux";
import { cartCount } from "../../utils/cartCount";
import "./cart-page.css";

const CartPage = () => {
   const { cart } = useSelector((state) => state.cart);

   const priceDetails = () => {
      const deliveryCharge = 399;
      const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
      const discountPerItem = () => {
         const discount = cart.map(
            (item) => (item.price - item.discountPrice) * item.qty
         );
         return discount;
      };
      const totalDiscount = discountPerItem().reduce((sum, i) => sum + i, 0);
      const grandTotal = totalPrice + deliveryCharge - totalDiscount;
      return { totalPrice, grandTotal, totalDiscount };
   };

   return (
      <div className="cart-page">
         <TopNav />
         <h4 className="my-3">My Cart - {cartCount(cart)}</h4>
         <main>
            {cartCount(cart) !== 0 ? (
               <>
                  <section className="cart-items">
                     {cart?.map((item) => (
                        <CartCard key={item._id} card={item} />
                     ))}
                  </section>
                  <div className="price-card shadow p-4">
                     <div className="card-field">
                        <h6>PRICE DETAILS</h6>
                     </div>
                     <hr className="my-1" />
                     <div className="card-field">
                        <span>Price</span>
                        <span>{`₹  ${priceDetails().totalPrice}`}</span>
                     </div>
                     <div className="card-field">
                        <span>Discount</span>
                        <span>{`- ₹  ${priceDetails().totalDiscount}`}</span>
                     </div>
                     <div className="card-field">
                        <span>Delivery Charges</span>
                        <span>₹ 399</span>
                     </div>
                     <hr className="my-1" />
                     <div className="card-field">
                        <h6>TOTAL</h6>
                        <span>{`₹  ${priceDetails().grandTotal}`}</span>
                     </div>
                     <hr className="my-1" />
                     <div className="my-2">
                        You will save{" "}
                        <b>{`₹ ${priceDetails().totalDiscount}`}</b> on this
                        order
                     </div>
                     <button className="button primary mt-1">
                        PLACE ORDER
                     </button>
                  </div>
               </>
            ) : (
               <h3>Your cart is empty😢</h3>
            )}
         </main>
         <Footer />
      </div>
   );
};

export { CartPage };
