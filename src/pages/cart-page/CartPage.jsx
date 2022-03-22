import { CartCard, Footer, TopNav } from "../../components";
import { useCart } from "../../context/cart-context";
import "./cart-page.css";

const CartPage = () => {
   const { state, dispatch } = useCart();

   const cartCount = () => {
      return state.cartData.reduce((sum, i) => sum + i.qty, 0);
   };

   return (
      <div className="cart-page">
         <TopNav />
         <h4 className="my-3">My Cart - {cartCount()}</h4>
         <main>
            {state.cartData.length !== 0 ? (
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
                        <span>₹ 1999</span>
                     </div>
                     <div className="card-field">
                        <span>Discount</span>
                        <span>₹ 499</span>
                     </div>
                     <div className="card-field">
                        <span>Delivery Charges</span>
                        <span>₹ 399</span>
                     </div>
                     <hr className="my-1" />
                     <div className="card-field">
                        <h6>TOTAL</h6>
                        <span>₹ 1500</span>
                     </div>
                     <hr className="my-1" />
                     <div className="my-2">
                        You will save <b>₹ 499</b> on this order
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
