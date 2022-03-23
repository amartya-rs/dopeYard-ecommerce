import { Footer, TopNav, WishlistCard } from "../../components";
import { useCart } from "../../context/cart-context";
import "./wishlist-page.css";

const WishlistPage = () => {
   const { state, dispatch } = useCart();
   return (
      <div className="wishlist-page">
         <TopNav />
         <main>
            <h4 className="my-3"> My Wishlist - {state.wishlistData.length}</h4>
            <section className="my-4 wishlist-items">
               {state.wishlistData.length !== 0 ? (
                  state.wishlistData.map((item) => <WishlistCard card={item} />)
               ) : (
                  <h3>Your wishlist is empty😢</h3>
               )}
            </section>
         </main>
         <Footer />
      </div>
   );
};

export { WishlistPage };
