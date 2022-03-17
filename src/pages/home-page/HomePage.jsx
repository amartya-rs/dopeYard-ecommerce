import { Footer, HomePageCard, TopNav } from "../../components";
import { useCart } from "../../context/cart-context";
import "./home-page.css";

const HomePage = () => {
   const { state } = useCart();

   return (
      <div className="home-page">
         <TopNav />
         <main className="mb-6">
            <header>
               <a className="h1 brand" href="/index.html">
                  dopeYard
               </a>
               <h3 className="font-semibold">
                  The ultimate merchandise store for the hardcore hiphop fans.
               </h3>
               <div className="overlay">
                  <button className="button primary mt-3">
                     <span className="h6 font-semibold">SHOP NOW</span>
                  </button>
               </div>
            </header>
            <h2 className="mt-8">Bestsellers</h2>
            <hr className="my-1" />
            <section className="featured mt-4 mb-8">
               {state.productData
                  .filter((item) => item.rating >= 4.5 && item.inStock)
                  .map((item) => (
                     <HomePageCard key={item._id} card={item} />
                  ))}
            </section>
         </main>
         <Footer />
      </div>
   );
};

export { HomePage };
