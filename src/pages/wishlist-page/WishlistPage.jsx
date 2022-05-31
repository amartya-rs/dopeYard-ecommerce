import { Footer, TopNav, WishlistCard } from "../../components";
import { useSelector } from "react-redux";
import "./wishlist-page.css";

const WishlistPage = () => {
   const { wishlist } = useSelector((state) => state.wishlist);

   return (
      <div className="wishlist-page">
         <TopNav />
         <main>
            <h4 className="my-3"> My Wishlist - {wishlist.length}</h4>
            <section className="my-4 wishlist-items">
               {wishlist.length !== 0 ? (
                  wishlist.map((item) => (
                     <WishlistCard key={item._id} card={item} />
                  ))
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
