import { CartCard, Footer, TopNav, PriceCard } from "../../components";
import { useSelector } from "react-redux";
import { cartCount } from "../../utils/cartCount";
import { useNavigate } from "react-router-dom";
import "./cart-page.css";

const CartPage = () => {
   const { cart } = useSelector((state) => state.cart);
   const navigate = useNavigate();

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
                  <PriceCard cart={cart} heading={"CART SUMMARY"}>
                     <button
                        className="button primary mt-1"
                        onClick={() => navigate("/checkout")}
                     >
                        CHECK OUT
                     </button>
                  </PriceCard>
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
