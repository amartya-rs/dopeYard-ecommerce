import { Footer, ProductCard, Sidebar, TopNav } from "../../components";
import { filterBySearchInput } from "../../utils/filters";
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

   const productsToDisplay = state.products && filterBySearchInput(state);

   return (
      <div className="product-page">
         <TopNav />
         <Sidebar />
         {productsToDisplay?.length !== 0 ? (
            <main className="p-6 grid-3-column">
               {productsToDisplay?.map((item) => (
                  <ProductCard key={item._id} card={item} />
               ))}
            </main>
         ) : (
            <h3 className="no-product-msg mt-2">No products found</h3>
         )}
         <Footer />
      </div>
   );
};

export { ProductPage };
