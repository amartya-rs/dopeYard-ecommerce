import { Footer, ProductCard, Sidebar, TopNav } from "../../components";
import { sortedByPrice } from "../../utils/filters";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
   loadProductData,
   loadProductCategories,
} from "../../features/server-requests";
import "./product-page.css";
import { useScrollToTop } from "../../utils/useScrollToTop";

const ProductPage = () => {
   const state = useSelector((state) => state.product);
   const dispatch = useDispatch();
   useScrollToTop();

   useEffect(() => {
      dispatch(loadProductData());
      dispatch(loadProductCategories());
   }, []);

   const productsToDisplay = state.products && sortedByPrice(state);

   return (
      <div className="product-page">
         <TopNav />
         <Sidebar />
         <main className="p-6 grid-3-column">
            {productsToDisplay?.length !== 0 &&
               productsToDisplay?.map((item) => (
                  <ProductCard key={item._id} card={item} />
               ))}
         </main>
         <Footer />
      </div>
   );
};

export { ProductPage };
