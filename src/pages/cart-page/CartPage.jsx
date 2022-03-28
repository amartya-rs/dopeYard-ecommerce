import { CartCard, Footer, TopNav } from "../../components";
import { useCart } from "../../context/cart-context";
import "./cart-page.css";

const CartPage = () => {
   const { state } = useCart();

   const cartCount = () => {
      return state.cartData.reduce((sum, i) => sum + i.qty, 0);
   };

   //calculating price details
   const priceDetails = () => {
      const deliveryCharge = 399;
      const totalPrice = state.cartData.reduce(
         (sum, i) => sum + i.price * i.qty,
         0
      );
      const discountPerItem = () => {
         const discount = state.cartData.map(
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
         <h4 className="my-3">My Cart - {cartCount()}</h4>
         <main>
            {cartCount() !== 0 ? (
               <>
                  <section className="cart-items">
                     {state.cartData.map((item) => (
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
