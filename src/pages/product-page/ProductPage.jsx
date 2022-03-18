import { Footer, ProductCard, Sidebar, TopNav } from "../../components";
import { useCart } from "../../context/cart-context";
import "./product-page.css";

const ProductPage = () => {
   const { state } = useCart();

   return (
      <div className="product-page">
         <TopNav />
         <Sidebar />
         <main className="p-6 grid-3-column">
            {state.productData.map((item) => (
               <ProductCard key={item._id} card={item} />
            ))}
         </main>
         <Footer />
      </div>
   );
};

export { ProductPage };
